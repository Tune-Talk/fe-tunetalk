import { Bot, User } from "lucide-react";
import { Song } from "../data/songs";
import { SongCard } from "./SongCard";

export interface Message {
  id: number;
  type: "user" | "bot";
  text?: string;
  songs?: Song[];
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === "bot";
  
  return (
    <div className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? "bg-purple-100" : "bg-blue-100"
      }`}>
        {isBot ? (
          <Bot className="w-5 h-5 text-purple-600" />
        ) : (
          <User className="w-5 h-5 text-blue-600" />
        )}
      </div>
      
      <div className={`flex-1 ${isBot ? "" : "flex flex-col items-end"}`}>
        {message.text && (
          <div className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
            isBot 
              ? "bg-gray-100 text-gray-900" 
              : "bg-blue-500 text-white"
          }`}>
            <p className="whitespace-pre-wrap">{message.text}</p>
          </div>
        )}
        
        {message.songs && message.songs.length > 0 && (
          <div className="mt-3 space-y-2 w-full max-w-md">
            {message.songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        )}
        
        <p className="text-xs text-gray-400 mt-1">
          {message.timestamp.toLocaleTimeString("id-ID", { 
            hour: "2-digit", 
            minute: "2-digit" 
          })}
        </p>
      </div>
    </div>
  );
}
