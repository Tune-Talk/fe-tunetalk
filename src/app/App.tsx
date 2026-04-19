import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { ChatMessage, Message } from "./components/ChatMessage";
import { songsData, moodKeywords, Song } from "./data/songs";
import logoImage from "../imports/image-2.png";
import chatIconImage from "../imports/image-1.png";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Halo! 👋 Aku TuneTalk, teman musik yang memahami perasaanmu.\n\nCeritakan bagaimana perasaanmu hari ini, dan aku akan menemukan lagu yang sempurna untukmu.\n\nContoh: \"Aku lagi sedih\", \"Aku butuh semangat\", \"Aku mau santai\"",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
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

  const getRecommendations = (moodCategory: string): Song[] => {
    const recommendations = songsData.filter((song) =>
      song.mood_tag.toLowerCase() === moodCategory.toLowerCase()
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
        setCurrentMood(detectedMood);
        const recommendations = getRecommendations(detectedMood);

        if (recommendations.length > 0) {
          const botMessage: Message = {
            id: messages.length + 2,
            type: "bot",
            text: `Aku merasakan emosimu 🎵\n\nBerikut lagu-lagu yang dipilih khusus untukmu:`,
            emotion: {
              label: detectedMood,
              confidence: 0.85 + Math.random() * 0.15, // Simulate confidence 0.85-1.0
              secondary_emotion: undefined,
            },
            playlist: {
              mood_category: detectedMood,
              songs: recommendations,
              total_songs: recommendations.length,
            },
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          const botMessage: Message = {
            id: messages.length + 2,
            type: "bot",
            text: "Maaf, aku belum punya rekomendasi untuk mood tersebut. Coba ceritakan perasaanmu dengan kata lain! 💜",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botMessage]);
        }
      } else {
        const botMessage: Message = {
          id: messages.length + 2,
          type: "bot",
          text: "Hmm, aku belum bisa mendeteksi perasaanmu. Coba gunakan kata seperti:\n\n• Senang/Bahagia\n• Sedih/Galau\n• Semangat/Motivasi\n• Santai/Relax\n• Romantis/Cinta\n\nCeritakan lagi dong! 💜",
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

  // Mood-based background gradients
  const getMoodGradient = () => {
    if (!currentMood) return "from-indigo-50/30 via-purple-50/20 to-teal-50/30";

    switch (currentMood.toLowerCase()) {
      case "happy":
        return "from-amber-50/40 via-pink-50/30 to-orange-50/40";
      case "melancholic":
      case "sadness":
        return "from-purple-100/40 via-indigo-100/30 to-blue-900/20";
      case "energetic":
        return "from-orange-50/40 via-red-50/30 to-amber-50/40";
      case "calm":
        return "from-teal-50/40 via-cyan-50/30 to-blue-50/40";
      case "romantic":
        return "from-pink-50/40 via-rose-50/30 to-purple-50/40";
      default:
        return "from-indigo-50/30 via-purple-50/20 to-teal-50/30";
    }
  };

  return (
    <div className={`size-full flex flex-col bg-gradient-to-br ${getMoodGradient()} transition-all duration-1000`}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-indigo-100/50 px-6 py-5 shadow-[0_4px_24px_rgba(99,102,241,0.08)]">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <img
            src={chatIconImage}
            alt="TuneTalk Icon"
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
          <img
            src={logoImage}
            alt="TuneTalk"
            className="h-10 object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <ChatMessage message={message} />
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 items-start animate-fadeIn">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                <Loader2 className="w-6 h-6 text-white animate-spin" />
              </div>
              <div className="bg-white/70 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-indigo-100/50">
                <p className="text-sm font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                  Memahami perasaanmu...
                </p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-indigo-100/50 px-6 py-5 shadow-[0_-4px_24px_rgba(99,102,241,0.06)]">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ceritakan perasaanmu hari ini..."
            disabled={isLoading}
            className="flex-1 px-5 py-4 bg-white/90 border border-indigo-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all shadow-sm placeholder:text-gray-400"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] font-medium"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="hidden sm:inline">Memproses...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Kirim</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
