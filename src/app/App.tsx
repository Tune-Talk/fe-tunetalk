import { useState, useRef, useEffect } from "react";
import { Send, Music2, Loader2 } from "lucide-react";
import { ChatMessage, Message } from "./components/ChatMessage";
import { songsData, moodKeywords } from "./data/songs";
import { Song } from "./data/songs";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Halo! 👋 Aku adalah chatbot rekomendasi lagu. Ceritakan mood kamu hari ini, dan aku akan merekomendasikan lagu yang cocok!\n\nContoh: \"Aku lagi sedih\", \"Aku butuh semangat\", \"Aku mau santai\"",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const detectMood = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    
    for (const [mood, keywords] of Object.entries(moodKeywords)) {
      if (keywords.some((keyword) => lowerText.includes(keyword))) {
        return mood;
      }
    }
    
    return null;
  };

  const getRecommendations = (mood: string): Song[] => {
    const recommendations = songsData.filter((song) =>
      song.mood.some((m) => 
        moodKeywords[mood]?.includes(m.toLowerCase())
      )
    );
    
    // Shuffle and return 3 random songs
    const shuffled = recommendations.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      const detectedMood = detectMood(inputValue);
      
      if (detectedMood) {
        const recommendations = getRecommendations(detectedMood);
        
        if (recommendations.length > 0) {
          const botMessage: Message = {
            id: messages.length + 2,
            type: "bot",
            text: `Aku mendeteksi mood kamu: ${detectedMood.toUpperCase()}! 🎵\n\nBerikut rekomendasi lagu untukmu:`,
            songs: recommendations,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          const botMessage: Message = {
            id: messages.length + 2,
            type: "bot",
            text: "Maaf, aku belum punya rekomendasi untuk mood tersebut. Coba ceritakan mood kamu dengan kata lain! 😊",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }
      } else {
        const botMessage: Message = {
          id: messages.length + 2,
          type: "bot",
          text: "Hmm, aku belum bisa mendeteksi mood kamu. Coba gunakan kata seperti:\n\n• Senang/Bahagia\n• Sedih/Galau\n• Semangat/Motivasi\n• Santai/Relax\n• Romantis/Cinta\n\nCeritakan lagi dong! 😊",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="size-full flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg">
            <Music2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">MoodTunes Bot</h1>
            <p className="text-sm text-gray-500">Rekomendasi Lagu Sesuai Mood</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-100">
                <Loader2 className="w-5 h-5 text-purple-600 animate-spin" />
              </div>
              <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                <p className="text-sm">Sedang menganalisis mood kamu...</p>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ceritakan mood kamu hari ini..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Kirim</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
