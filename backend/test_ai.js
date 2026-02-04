require('dotenv').config();

async function test() {
    const key = process.env.OPENROUTER_API_KEY;
    console.log("Using Key:", key.substring(0, 10) + "...");

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${key}`,
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "BlinkNotes AI Test"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: "hi" }]
            })
        });
        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response Data:", JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Test Error:", e);
    }
}

test();
