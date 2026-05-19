import { User, Sparkles } from "lucide-react";
import { Song, Emotion, Playlist } from "../data/songs";
import { SongCard } from "./SongCard";
import chatIconImage from "../../imports/image-1.png";

export interface Message {
  id: number;
  type: "user" | "bot";
  text?: string;
  emotion?: Emotion;
  playlist?: Playlist;
  timestamp: Date;
  isError?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === "bot";

  const getMoodGradient = (moodCategory?: string) => {
    if (!moodCategory) return "from-indigo-500 to-purple-500";

    switch (moodCategory.toLowerCase()) {
      case "happy":
      case "joy":
        return "from-amber-400 to-pink-500";
      case "melancholic":
      case "sadness":
        return "from-purple-600 to-indigo-800";
      case "energetic":
      case "anger":
        return "from-orange-500 to-red-500";
      case "calm":
      case "anxiety":
        return "from-teal-400 to-cyan-500";
      case "romantic":
        return "from-pink-500 to-rose-600";
      default:
        return "from-indigo-500 to-purple-500";
    }
  };

  return (
    <div
      className={`flex gap-4 items-start ${isBot ? "" : "flex-row-reverse"}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
          isBot
            ? message.isError
              ? "bg-gradient-to-br from-red-400 to-red-600"
              : "bg-gradient-to-br from-indigo-200 to-purple-300"
            : "bg-gradient-to-br from-teal-400 to-emerald-500"
        }`}>
        {isBot ? (
          <img
            src={chatIconImage}
            alt="TuneTalk"
            className="w-10 h-10 object-contain"
          />
        ) : (
          <User className="w-6 h-6 text-white" strokeWidth={2.5} />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 ${isBot ? "" : "flex flex-col items-end"}`}>
        {message.text && (
          <div
            className={`inline-block px-5 py-3 rounded-2xl max-w-[85%] shadow-sm ${
              isBot
                ? message.isError
                  ? "bg-gradient-to-br from-red-500 to-red-600 text-white backdrop-blur-sm"
                  : `bg-gradient-to-br ${getMoodGradient(message.playlist?.mood_category)} text-white backdrop-blur-sm`
                : "bg-white/70 backdrop-blur-sm text-gray-800 border border-teal-100"
            }`}>
            <p className="whitespace-pre-wrap leading-relaxed">
              {message.text}
            </p>

            {message.emotion && (
              <div className="mt-2 flex items-center gap-1.5 text-xs opacity-90">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-medium capitalize">
                  {message.emotion.label}
                </span>
                {message.emotion.confidence && (
                  <span className="opacity-75">
                    ({Math.round(message.emotion.confidence * 100)}%)
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {message.playlist && message.playlist.songs.length > 0 && (
          <div className="mt-4 space-y-3 w-full max-w-lg">
            {message.playlist.songs.map((song, index) => (
              <div
                key={song.song_id}
                style={{
                  animation: `slideInLeft 0.4s ease-out ${index * 0.15}s both`,
                }}>
                <SongCard song={song} mood={message.playlist?.mood_category} />
              </div>
            ))}
          </div>
        )}

        <p
          className={`text-xs mt-2 ${isBot ? "text-gray-500" : "text-gray-500"}`}>
          {message.timestamp.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
