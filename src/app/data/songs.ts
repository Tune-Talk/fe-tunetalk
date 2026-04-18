export interface Song {
  id: number;
  title: string;
  artist: string;
  mood: string[];
  genre: string;
  spotifyUrl: string;
  youtubeUrl: string;
}

export const songsData: Song[] = [
  {
    id: 1,
    title: "Happy",
    artist: "Pharrell Williams",
    mood: ["senang", "bahagia", "gembira", "happy"],
    genre: "Pop",
    spotifyUrl: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
    youtubeUrl: "https://www.youtube.com/results?search_query=Happy+Pharrell+Williams"
  },
  {
    id: 2,
    title: "Someone Like You",
    artist: "Adele",
    mood: ["sedih", "galau", "sad", "melankolis"],
    genre: "Pop/Soul",
    spotifyUrl: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV",
    youtubeUrl: "https://www.youtube.com/results?search_query=Someone+Like+You+Adele"
  },
  {
    id: 3,
    title: "Eye of the Tiger",
    artist: "Survivor",
    mood: ["semangat", "motivasi", "energik", "motivated"],
    genre: "Rock",
    spotifyUrl: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2",
    youtubeUrl: "https://www.youtube.com/results?search_query=Eye+of+the+Tiger+Survivor"
  },
  {
    id: 4,
    title: "Weightless",
    artist: "Marconi Union",
    mood: ["santai", "relax", "tenang", "calm"],
    genre: "Ambient",
    spotifyUrl: "https://open.spotify.com/track/3jjsj4V8GT0ův3k4JF3y8l",
    youtubeUrl: "https://www.youtube.com/results?search_query=Weightless+Marconi+Union"
  },
  {
    id: 5,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    mood: ["senang", "gembira", "party", "happy"],
    genre: "Funk/Pop",
    spotifyUrl: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
    youtubeUrl: "https://www.youtube.com/results?search_query=Uptown+Funk"
  },
  {
    id: 6,
    title: "The Scientist",
    artist: "Coldplay",
    mood: ["sedih", "melankolis", "sad", "galau"],
    genre: "Alternative Rock",
    spotifyUrl: "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle",
    youtubeUrl: "https://www.youtube.com/results?search_query=The+Scientist+Coldplay"
  },
  {
    id: 7,
    title: "Till I Collapse",
    artist: "Eminem ft. Nate Dogg",
    mood: ["semangat", "motivasi", "energik", "workout"],
    genre: "Hip Hop",
    spotifyUrl: "https://open.spotify.com/track/4xkOaSrkexMciUUogZKVTS",
    youtubeUrl: "https://www.youtube.com/results?search_query=Till+I+Collapse+Eminem"
  },
  {
    id: 8,
    title: "Chill Vibes",
    artist: "Lofi Beats",
    mood: ["santai", "relax", "calm", "study"],
    genre: "Lofi",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn",
    youtubeUrl: "https://www.youtube.com/results?search_query=Lofi+Chill+Beats"
  },
  {
    id: 9,
    title: "Can't Stop the Feeling",
    artist: "Justin Timberlake",
    mood: ["senang", "bahagia", "gembira", "happy"],
    genre: "Pop",
    spotifyUrl: "https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI",
    youtubeUrl: "https://www.youtube.com/results?search_query=Can't+Stop+the+Feeling"
  },
  {
    id: 10,
    title: "Fix You",
    artist: "Coldplay",
    mood: ["sedih", "melankolis", "sad", "comfort"],
    genre: "Alternative Rock",
    spotifyUrl: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q",
    youtubeUrl: "https://www.youtube.com/results?search_query=Fix+You+Coldplay"
  },
  {
    id: 11,
    title: "Stronger",
    artist: "Kanye West",
    mood: ["semangat", "motivasi", "energik", "confident"],
    genre: "Hip Hop",
    spotifyUrl: "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3",
    youtubeUrl: "https://www.youtube.com/results?search_query=Stronger+Kanye+West"
  },
  {
    id: 12,
    title: "Perfect",
    artist: "Ed Sheeran",
    mood: ["romantis", "cinta", "love", "romantic"],
    genre: "Pop",
    spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    youtubeUrl: "https://www.youtube.com/results?search_query=Perfect+Ed+Sheeran"
  },
  {
    id: 13,
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    mood: ["santai", "relax", "tenang", "peaceful"],
    genre: "Electronic",
    spotifyUrl: "https://open.spotify.com/track/0V9JLWl3YJGaXk8cMXJdTY",
    youtubeUrl: "https://www.youtube.com/results?search_query=Sunset+Lover+Petit+Biscuit"
  },
  {
    id: 14,
    title: "Shake It Off",
    artist: "Taylor Swift",
    mood: ["senang", "gembira", "fun", "happy"],
    genre: "Pop",
    spotifyUrl: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD",
    youtubeUrl: "https://www.youtube.com/results?search_query=Shake+It+Off+Taylor+Swift"
  },
  {
    id: 15,
    title: "All of Me",
    artist: "John Legend",
    mood: ["romantis", "cinta", "love", "romantic"],
    genre: "R&B/Soul",
    spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    youtubeUrl: "https://www.youtube.com/results?search_query=All+of+Me+John+Legend"
  },
  {
    id: 16,
    title: "Lose Yourself",
    artist: "Eminem",
    mood: ["semangat", "motivasi", "determined", "energik"],
    genre: "Hip Hop",
    spotifyUrl: "https://open.spotify.com/track/5Z01UMMf7V1o0MzF86s6WJ",
    youtubeUrl: "https://www.youtube.com/results?search_query=Lose+Yourself+Eminem"
  },
  {
    id: 17,
    title: "Skinny Love",
    artist: "Bon Iver",
    mood: ["sedih", "melankolis", "sad", "emotional"],
    genre: "Indie Folk",
    spotifyUrl: "https://open.spotify.com/track/01oSZMOPzsTIaZCJ5qRpIE",
    youtubeUrl: "https://www.youtube.com/results?search_query=Skinny+Love+Bon+Iver"
  },
  {
    id: 18,
    title: "Ocean Eyes",
    artist: "Billie Eilish",
    mood: ["santai", "dreamy", "tenang", "calm"],
    genre: "Alternative/Indie",
    spotifyUrl: "https://open.spotify.com/track/2uHYJKtPNWkJWsDDLcfzL7",
    youtubeUrl: "https://www.youtube.com/results?search_query=Ocean+Eyes+Billie+Eilish"
  },
  {
    id: 19,
    title: "Don't Stop Me Now",
    artist: "Queen",
    mood: ["senang", "gembira", "energik", "happy"],
    genre: "Rock",
    spotifyUrl: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7",
    youtubeUrl: "https://www.youtube.com/results?search_query=Don't+Stop+Me+Now+Queen"
  },
  {
    id: 20,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    mood: ["romantis", "cinta", "love", "romantic"],
    genre: "Pop/Soul",
    spotifyUrl: "https://open.spotify.com/track/2lzEz3A3XIFyhMUfhI4GKD",
    youtubeUrl: "https://www.youtube.com/results?search_query=Thinking+Out+Loud+Ed+Sheeran"
  }
];

export const moodKeywords: { [key: string]: string[] } = {
  senang: ["senang", "bahagia", "gembira", "happy", "joy", "cheerful", "fun", "excited"],
  sedih: ["sedih", "galau", "sad", "melankolis", "melancholy", "down", "blue", "emotional"],
  semangat: ["semangat", "motivasi", "energik", "motivated", "pumped", "workout", "determined", "confident"],
  santai: ["santai", "relax", "tenang", "calm", "peaceful", "chill", "study", "peaceful", "dreamy"],
  romantis: ["romantis", "cinta", "love", "romantic", "romance"]
};
