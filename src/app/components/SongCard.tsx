import { Song } from "../data/songs";
import { ExternalLink, Music2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SongCardProps {
  song: Song;
  mood?: string;
}

export function SongCard({ song, mood }: SongCardProps) {
  const getMoodGradient = (mood?: string) => {
    if (!mood) return "from-indigo-400 to-indigo-600";

    switch (mood.toLowerCase()) {
      case "happy":
        return "from-amber-400 to-pink-500";
      case "melancholic":
      case "sadness":
        return "from-purple-500 to-indigo-700";
      case "energetic":
        return "from-orange-400 to-red-500";
      case "calm":
        return "from-teal-400 to-cyan-500";
      case "romantic":
        return "from-pink-400 to-rose-600";
      default:
        return "from-indigo-400 to-indigo-600";
    }
  };

  const gradient = getMoodGradient(mood);

  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-indigo-100/50 rounded-2xl p-4 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200">
      <div className="flex items-center gap-4">
        {/* Album Art */}
        {song.cover_image ? (
          <div className="flex-shrink-0 w-14 h-14 rounded-xl shadow-lg overflow-hidden">
            <ImageWithFallback
              src={song.cover_image}
              alt={`${song.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}
          >
            <Music2 className="w-7 h-7 text-white/90" strokeWidth={2} />
          </div>
        )}

        {/* Song Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate leading-tight">
            {song.title}
          </h3>
          <p className="text-sm text-gray-600 truncate">{song.artist}</p>
          <p className="text-xs text-gray-500 truncate mt-0.5">{song.genre}</p>
        </div>

        {/* Spotify Button */}
        <a
          href={song.spotify_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs bg-[#1DB954] text-white px-4 py-2 rounded-full hover:bg-[#1ed760] transition-all hover:shadow-lg font-medium flex-shrink-0"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Spotify
        </a>
      </div>
    </div>
  );
}
