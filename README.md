# 🎧 TuneTalk — Frontend

## 📌 Overview

TuneTalk is a **web-based chatbot interface** designed to:

- Provide **empathetic emotional support responses**
- Recommend **mood-based music playlists**

This frontend is part of an NLP-based system that processes user emotional input and returns supportive responses along with curated music suggestions.

> ⚠️ This frontend is currently a **prototype (UI-focused)** and is **not yet integrated with backend APIs or NLP models**.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open in Browser

```
http://localhost:5173
```

---

## 🧱 Project Structure

```
fe-tunetalk/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── .gitignore

├── src/
│   ├── main.tsx
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── SongCard.tsx
│   │   │   │
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── table.tsx
│   │   │       ├── tooltip.tsx
│   │   │       ├── form.tsx
│   │   │       ├── utils.ts
│   │   │       └── ...
│   │   │
│   │   ├── data/
│   │   │   └── songs.ts
│   │
│   ├── imports/
│   │   ├── image-1.png
│   │   └── image-2.png
│   │
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
```

---

## ✨ Features

### 💬 Chat Interface

- Accepts user emotional input (rant text)
- Displays messages in chat bubble format
- Scrollable conversation history

---

### ❤️ Empathetic Response (UI Only)

- Displays chatbot response as emotional support text
- Currently mocked (not from NLP model yet)

---

### 🎵 Playlist Recommendation

- Displays songs in **card format**
- Each card includes:
  - Song title
  - Artist name
  - Mood tag
  - Spotify link

---

### ⏳ Loading State

- Shows loading indicator during request simulation
- Disables input while processing

---

### ⚠️ Error Handling (Planned)

- Will handle API errors (4xx / 5xx)
- Will display user-friendly messages

---

## 🔄 Frontend Flow

```
User Input
   ↓
Validate Input
   ↓
(Planned) Send Request via Axios
   ↓
Show Loading State
   ↓
Receive Response
   ↓
Render Chat Message
   ↓
Render Playlist Cards
```

---

## 📸 Screenshots

Place your UI screenshots in the following directory:

```
docs/
└── screenshots/
    ├── chat-interface.png
    ├── loading-state.png
    ├── response-output.png
    └── playlist-display.png
```

### Example Usage

```md
## Chat Interface

![Chat](./docs/screenshots/chat-interface.png)

## Playlist Recommendation

![Playlist](./docs/screenshots/playlist-display.png)
```

---

## 🔌 API Integration (Planned)

### Endpoint

```
POST /api/chat
```

### Request Example

```json
{
  "user_id": "user_001",
  "message": "I feel happy because i finally found someone who treats me right in relationship"
}
```

### Expected Response (Frontend Consumption)

```json
{
  "emotion": "joy",
  "support_response": "That is a lot to be thankful for! You must be feeling really good! I hope this happy moment brings you even more beautiful experiences ahead. I have a music recommendation that matches your lovely mood!",
  "playlist": [
    {
      "title": "Song Title",
      "artist": "Artist Name",
      "mood_tag": "melancholic",
      "spotify_url": "https://open.spotify.com/track/..."
    }
  ]
}
```

---

## ⚠️ Disclaimer

This project is currently under development.

- ❌ Not integrated with backend (Flask API)
- ❌ Not connected to NLP models (emotion detection, response generation)
- ❌ Playlist is using static/mock data (`songs.ts`)

### Current Status

- ✅ UI/UX implemented
- ✅ Component structure ready
- ✅ Frontend flow designed

### Upcoming Work

- 🔗 Backend API integration
- 🧠 NLP model connection
- 🎧 Spotify API integration

---

## 🧠 System Context

This frontend is part of a larger system that includes:

- Emotion detection (RoBERTa / IndoBERT)
- Empathetic response generation (retrieval-based)
- Mood-to-music mapping (Valence-Arousal model)

The frontend acts as:

- User interaction layer
- Visualization layer for chatbot responses and playlists

---

## 🛠 Tech Stack

- **React (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **Axios (planned)**

---

## 📌 Notes

- This is a **prototype/demo system**
- Focus is on **interaction and usability**
- Not intended for production deployment yet

---

## 👨‍💻 Author

Frontend Engineer — TuneTalk Project
