// backend/routes/chatbot.js
const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

router.post('/gpt', async (req, res) => {
  console.log("🔥 Chat Request Received (Gemini)");

  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "Empty message" });
  }

  const key = (process.env.GEMINI_API_KEY || "").trim();
  if (!key || key === "YOUR_GEMINI_API_KEY_HERE") {
    console.error("❌ GEMINI_API_KEY is missing or not set in .env");
    return res.status(500).json({ error: "Server configuration error (Gemini API Key missing)" });
  }

  try {
    console.log("📡 Calling Gemini API...");
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: "You are BlinkNotes AI, a dedicated educational assistant. You must ONLY answer questions related to academic subjects, study tips, exam preparation, and learning. If a user asks about non-educational topics (e.g., movies, politics, general chit-chat unrelated to study), politely refuse and state that you can only assist with education-related queries."
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const reply = response.text();

    if (reply) {
      console.log("🤖 Gemini Reply Success");
      res.json({ reply });
    } else {
      console.error("❌ Empty response from Gemini");
      res.status(500).json({ error: "Invalid AI response structure" });
    }

  } catch (error) {
    console.error("❌ Gemini Route Failure:", error.message);
    res.status(500).json({ error: "Internal Server Error during AI call: " + error.message });
  }
});

// const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || 'your-fallback-key-here';

// router.post('/', async (req, res) => {
//   const userMessage = req.body.message;

//   const payload = {
//     model: "openai/gpt-3.5-turbo",
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: userMessage }
//     ]
//   };

//   try {
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
//         "X-Title": "BlinkNotes AI"
//       },
//       body: JSON.stringify(payload)
//     });

//     const data = await response.json();

//     if (data.choices?.[0]?.message?.content) {
//       res.json({ reply: data.choices[0].message.content });
//     } else {
//       res.status(500).json({ error: "Unexpected response from OpenRouter" });
//     }

//   } catch (err) {
//     console.error("Fetch error:", err);
//     res.status(500).json({ error: "Failed to connect to OpenRouter" });
//   }
// });



module.exports = router;
