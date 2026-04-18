import { Song } from "../data/songs";
import { ExternalLink, Music } from "lucide-react";

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
          <Music className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{song.title}</h3>
          <p className="text-sm text-gray-600 truncate">{song.artist}</p>
          <p className="text-xs text-gray-500 mt-1">{song.genre}</p>
          
          <div className="flex gap-2 mt-3">
            <a
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Spotify
            </a>
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
