import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { ChatMessage, Message } from "./components/ChatMessage";
import { getUserId } from "./services/userId";
import { postChat } from "./services/api";
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

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const wordCount = inputValue.trim().split(/\s+/).length;
    if (wordCount < 5) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "user" as const,
          text: inputValue,
          timestamp: new Date(),
        },
        {
          id: prev.length + 2,
          type: "bot" as const,
          text: "Tolong ceritakan lebih detail ya, minimal 5 kata agar aku bisa memahami perasaanmu dengan lebih baik 💜",
          timestamp: new Date(),
          isError: true,
        },
      ]);
      setInputValue("");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "user" as const,
        text: inputValue,
        timestamp: new Date(),
      },
    ]);
    setInputValue("");
    setIsLoading(true);

    try {
      const userId = getUserId();
      const response = await postChat(userId, inputValue);

      setCurrentMood(response.emotion.label);

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "bot" as const,
          text: response.support_response.text,
          emotion: response.emotion,
          playlist: response.playlist,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "bot" as const,
          text: error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
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
      case "joy":
        return "from-amber-50/40 via-pink-50/30 to-orange-50/40";
      case "melancholic":
      case "sadness":
        return "from-purple-100/40 via-indigo-100/30 to-blue-900/20";
      case "energetic":
      case "anger":
        return "from-orange-50/40 via-red-50/30 to-amber-50/40";
      case "calm":
      case "anxiety":
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
