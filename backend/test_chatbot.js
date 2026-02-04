// test_chatbot.js - Simple test server for Gemini chatbot
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ status: '✅ Server is running!', chatbot: 'Ready' });
});

// Gemini Chatbot Route
app.post('/chat/gpt', async (req, res) => {
  console.log("🔥 Chat Request Received");

  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "Empty message" });
  }

  const key = (process.env.GEMINI_API_KEY || "").trim();
  if (!key || key === "YOUR_GEMINI_API_KEY_HERE") {
    console.error("❌ GEMINI_API_KEY is missing!");
    return res.status(500).json({ 
      error: "Please add your Gemini API key to the .env file. Get one at: https://aistudio.google.com/app/apikey" 
    });
  }

  try {
    console.log("📡 Calling Gemini API...");
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: "You are BlinkNotes AI, a dedicated educational assistant. You must ONLY answer questions related to academic subjects, study tips, exam preparation, and learning. If a user asks about non-educational topics, politely refuse and state that you can only assist with education-related queries."
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const reply = response.text();

    if (reply) {
      console.log("✅ Gemini Reply Success");
      res.json({ reply });
    } else {
      console.error("❌ Empty response from Gemini");
      res.status(500).json({ error: "Invalid AI response" });
    }

  } catch (error) {
    console.error("❌ Gemini Error:", error.message);
    res.status(500).json({ 
      error: "AI call failed: " + error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Test Server Running on http://localhost:${PORT}`);
  console.log(`📡 Chatbot endpoint: http://localhost:${PORT}/chat/gpt`);
  console.log(`\n🔑 Make sure GEMINI_API_KEY is set in .env file!`);
  console.log(`   Get your key at: https://aistudio.google.com/app/apikey\n`);
});
