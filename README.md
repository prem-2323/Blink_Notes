# BlinkNotes 📚 (Beta)

BlinkNotes is a centralized online platform designed to help students access quality study materials anytime, anywhere. It serves as a digital library where users can share, discover, and download academic notes (PDFs) organized by subject, semester, and tags.

The platform also features an **AI Helper** to assist with educational queries.

## 🚀 Features

*   **View & Browse Notes:** Filter notes by Subject, Semester, or Tags.
*   **Upload Notes:** Share your own study materials (PDFs) with the community.
*   **AI Chatbot:** A dedicated educational assistant powered by AI (OpenRouter/GPT) to answer academic questions.
*   **User Accounts:** Secure Login and Registration system.
*   **Leaderboard:** (Coming Soon) Track top contributors.
*   **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, FontAwesome
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** JWT (JSON Web Tokens)
*   **AI Integration:** OpenRouter API

## 📦 Installation & Setup

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB installed and running locally (or a MongoDB Atlas connection string).

### 1. Clone the Repository
```bash
git clone <repository-url>
cd note
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following credentials:
```env
MONGODB_URI=mongodb://localhost:27017/blinknotes
PORT=3000
JWT_SECRET=your_super_secret_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Start the backend server:
```bash
npm start
# OR
node server.js
```
The server will run at `http://localhost:3000`.

### 3. Frontend Setup
The frontend is built with static HTML/JS. You can simply open the `frontend/index.html` file in your browser, or use a live server extension.

Ensure `frontend/config.js` points to your local backend:
```javascript
window.env = {
  API_URL: 'http://localhost:3000'
};
```

## 📂 Project Structure

```
note/
├── backend/            # Express.js Server & API Routes
│   ├── routes/         # API Endpoints (auth, chatbot, files)
│   ├── models/         # Mongoose Database Models
│   ├── server.js       # Main server entry point
│   ├── package.json    # Backend dependencies
│   └── .env            # Environment variables
│
└── frontend/           # Static HTML/CSS/JS Client
    ├── index.html      # Landing Page
    ├── browse.html     # Notes Browser
    ├── upload.html     # Upload Interface
    ├── chat.html       # AI Chatbot Interface
    ├── login.html      # Login Page
    ├── signup.html     # Registration Page
    ├── navbar.js       # Common Navigation Component
    ├── style.css       # Global Styles
    └── config.js       # API Configuration
```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## 📄 License
This project is for educational purposes.