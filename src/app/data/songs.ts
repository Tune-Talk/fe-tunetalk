export interface Song {
  song_id: string;
  title: string;
  artist: string;
  genre: string;
  mood_tag: string;
  spotify_url: string;
  cover_image?: string;
}

export interface Emotion {
  label: string;
  confidence: number;
  secondary_emotion?: string;
}

export interface SupportResponse {
  text: string;
}

export interface Playlist {
  mood_category: string;
  songs: Song[];
  total_songs: number;
}

export interface BotResponse {
  user_id: string;
  timestamp: string;
  emotion: Emotion;
  support_response: SupportResponse;
  playlist: Playlist;
}

export const songsData: Song[] = [
  {
    song_id: "spotify_001",
    title: "Happy",
    artist: "Pharrell Williams",
    mood_tag: "happy",
    genre: "Pop",
    spotify_url: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
  },
  {
    song_id: "spotify_002",
    title: "Someone Like You",
    artist: "Adele",
    mood_tag: "melancholic",
    genre: "Pop/Soul",
    spotify_url: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV"
  },
  {
    song_id: "spotify_003",
    title: "Eye of the Tiger",
    artist: "Survivor",
    mood_tag: "energetic",
    genre: "Rock",
    spotify_url: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2"
  },
  {
    song_id: "spotify_004",
    title: "Weightless",
    artist: "Marconi Union",
    mood_tag: "calm",
    genre: "Ambient",
    spotify_url: "https://open.spotify.com/track/3jjsj4V8GT0ův3k4JF3y8l"
  },
  {
    song_id: "spotify_005",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    mood_tag: "happy",
    genre: "Funk/Pop",
    spotify_url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
  },
  {
    song_id: "spotify_006",
    title: "The Scientist",
    artist: "Coldplay",
    mood_tag: "melancholic",
    genre: "Alternative Rock",
    spotify_url: "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
  },
  {
    song_id: "spotify_007",
    title: "Till I Collapse",
    artist: "Eminem ft. Nate Dogg",
    mood_tag: "energetic",
    genre: "Hip Hop",
    spotify_url: "https://open.spotify.com/track/4xkOaSrkexMciUUogZKVTS"
  },
  {
    song_id: "spotify_008",
    title: "Chill Vibes",
    artist: "Lofi Beats",
    mood_tag: "calm",
    genre: "Lofi",
    spotify_url: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
  },
  {
    song_id: "spotify_009",
    title: "Can't Stop the Feeling",
    artist: "Justin Timberlake",
    mood_tag: "happy",
    genre: "Pop",
    spotify_url: "https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI"
  },
  {
    song_id: "spotify_010",
    title: "Fix You",
    artist: "Coldplay",
    mood_tag: "melancholic",
    genre: "Alternative Rock",
    spotify_url: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
  },
  {
    song_id: "spotify_011",
    title: "Stronger",
    artist: "Kanye West",
    mood_tag: "energetic",
    genre: "Hip Hop",
    spotify_url: "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3"
  },
  {
    song_id: "spotify_012",
    title: "Perfect",
    artist: "Ed Sheeran",
    mood_tag: "romantic",
    genre: "Pop",
    spotify_url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
  },
  {
    song_id: "spotify_013",
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    mood_tag: "calm",
    genre: "Electronic",
    spotify_url: "https://open.spotify.com/track/0V9JLWl3YJGaXk8cMXJdTY"
  },
  {
    song_id: "spotify_014",
    title: "Shake It Off",
    artist: "Taylor Swift",
    mood_tag: "happy",
    genre: "Pop",
    spotify_url: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD"
  },
  {
    song_id: "spotify_015",
    title: "All of Me",
    artist: "John Legend",
    mood_tag: "romantic",
    genre: "R&B/Soul",
    spotify_url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a"
  },
  {
    song_id: "spotify_016",
    title: "Lose Yourself",
    artist: "Eminem",
    mood_tag: "energetic",
    genre: "Hip Hop",
    spotify_url: "https://open.spotify.com/track/5Z01UMMf7V1o0MzF86s6WJ"
  },
  {
    song_id: "spotify_017",
    title: "Skinny Love",
    artist: "Bon Iver",
    mood_tag: "melancholic",
    genre: "Indie Folk",
    spotify_url: "https://open.spotify.com/track/01oSZMOPzsTIaZCJ5qRpIE"
  },
  {
    song_id: "spotify_018",
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    mood_tag: "calm",
    genre: "Alternative/Indie",
    spotify_url: "https://open.spotify.com/track/2uHYJKtPNWkJWsDDLcfzL7"
  },
  {
    song_id: "spotify_019",
    title: "Don't Stop Me Now",
    artist: "Queen",
    mood_tag: "happy",
    genre: "Rock",
    spotify_url: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7"
  },
  {
    song_id: "spotify_020",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    mood_tag: "romantic",
    genre: "Pop/Soul",
    spotify_url: "https://open.spotify.com/track/2lzEz3A3XIFyhMUfhI4GKD"
  }
];

export const moodKeywords: { [key: string]: string[] } = {
  happy: ["senang", "bahagia", "gembira", "happy", "joy", "cheerful", "fun", "excited"],
  melancholic: ["sedih", "galau", "sad", "melankolis", "melancholy", "down", "blue", "emotional", "sadness", "anxiety"],
  energetic: ["semangat", "motivasi", "energik", "motivated", "pumped", "workout", "determined", "confident"],
  calm: ["santai", "relax", "tenang", "calm", "peaceful", "chill", "study", "dreamy"],
  romantic: ["romantis", "cinta", "love", "romantic", "romance"]
};
