# 🤖 Gemini AI Chatbot Setup Guide

Your chatbot is already coded and ready to go! Just follow these steps:

## Step 1: Get Your Free Gemini API Key

1. Visit: **https://aistudio.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key (starts with `AIza...`)

## Step 2: Add API Key to Your Project

1. Open: `backend/.env`
2. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:
   ```
   GEMINI_API_KEY=AIzaSy...your-actual-key...
   ```
3. Save the file

## Step 3: Install Dependencies

Open terminal in the `backend` folder and run:
```bash
cd backend
npm install
```

## Step 4: Start the Server

In the backend folder, run:
```bash
npm start
```

You should see:
```
✅ Connected to MongoDB Atlas
Server running on port 3000
```

## Step 5: Open the Chatbot

1. Open `frontend/chat.html` in your browser
2. Start chatting with the AI!

## ✨ Features

- **Educational Assistant**: The AI only answers study-related questions
- **Powered by Gemini 1.5 Flash**: Fast and smart responses
- **Beautiful UI**: Clean, modern chat interface

## 🔧 Troubleshooting

**Problem**: "Server configuration error (Gemini API Key missing)"
- Solution: Make sure you added your API key to `.env` file

**Problem**: "Cannot connect to server"
- Solution: Make sure the backend server is running on port 3000

**Problem**: MongoDB connection error
- Solution: Your MongoDB connection string might be wrong. Update `MONGODB_URI` in `.env`

## 🎯 Test It Out

Try asking:
- "Explain photosynthesis"
- "Help me prepare for math exam"
- "What are Newton's laws?"

The AI will refuse non-educational questions to keep focused on learning!

---

Enjoy your AI-powered study assistant! 🚀
