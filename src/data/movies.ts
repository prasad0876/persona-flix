export interface Movie {
  id: string;
  title: string;
  genre: string[];
  description: string;
  mood: string;
  pace: string;
  emotional_weight: number;
  language: string;
  year: number;
  rating: number;
  poster: string;
  explanation?: string;
  match_score?: number;
}

export interface PersonalityProfile {
  adventurous: number;
  emotional: number;
  analytical: number;
  social: number;
  darkHumor: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    traits: Partial<PersonalityProfile>;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "It's Friday night. What sounds most appealing?",
    options: [
      { text: "Exploring a hidden speakeasy in the city", traits: { adventurous: 3, social: 1 } },
      { text: "A cozy night in with a heartfelt drama", traits: { emotional: 3, analytical: 1 } },
      { text: "Hosting a game night with friends", traits: { social: 3, darkHumor: 1 } },
      { text: "Binging a dark comedy docuseries", traits: { darkHumor: 3, analytical: 1 } },
    ],
  },
  {
    id: 2,
    question: "Which movie scene would stick with you longest?",
    options: [
      { text: "A breathtaking chase through exotic landscapes", traits: { adventurous: 3, emotional: 1 } },
      { text: "A tearful goodbye between lovers at an airport", traits: { emotional: 3, social: 1 } },
      { text: "A genius detective solving an impossible puzzle", traits: { analytical: 3, adventurous: 1 } },
      { text: "A perfectly timed dark joke during a tense moment", traits: { darkHumor: 3, social: 1 } },
    ],
  },
  {
    id: 3,
    question: "If your life were a movie, what would the critics say?",
    options: [
      { text: '"A wild ride that never stops" – ★★★★', traits: { adventurous: 3, darkHumor: 1 } },
      { text: '"Deeply moving and profoundly human" – ★★★★', traits: { emotional: 3, analytical: 1 } },
      { text: '"A masterclass in strategic thinking" – ★★★★', traits: { analytical: 3, adventurous: 1 } },
      { text: '"The ensemble cast steals the show" – ★★★★', traits: { social: 3, emotional: 1 } },
    ],
  },
];

export const moods = [
  { id: "happy", label: "😊 Happy", color: "hsl(45, 90%, 55%)" },
  { id: "sad", label: "😢 Melancholic", color: "hsl(210, 60%, 50%)" },
  { id: "thrilled", label: "🔥 Thrilled", color: "hsl(0, 76%, 50%)" },
  { id: "relaxed", label: "😌 Relaxed", color: "hsl(145, 65%, 50%)" },
  { id: "curious", label: "🧠 Curious", color: "hsl(270, 60%, 55%)" },
  { id: "nostalgic", label: "✨ Nostalgic", color: "hsl(25, 95%, 55%)" },
];

export const mockMovies: Movie[] = [
  {
    id: "1", title: "Inception", genre: ["Sci-Fi", "Thriller"], description: "A thief who steals corporate secrets through dream-sharing technology.", mood: "thrilled", pace: "fast", emotional_weight: 0.7, language: "English", year: 2010, rating: 8.8,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    explanation: "Your analytical mind craves layered narratives with puzzle-like structures.",
    match_score: 96,
  },
  {
    id: "2", title: "Amélie", genre: ["Romance", "Comedy"], description: "A shy waitress decides to change the lives of those around her.", mood: "happy", pace: "medium", emotional_weight: 0.8, language: "French", year: 2001, rating: 8.3,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    explanation: "Your emotional depth pairs perfectly with this whimsical journey of human connection.",
    match_score: 93,
  },
  {
    id: "3", title: "Mad Max: Fury Road", genre: ["Action", "Adventure"], description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", mood: "thrilled", pace: "fast", emotional_weight: 0.5, language: "English", year: 2015, rating: 8.1,
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
    explanation: "Your adventurous spirit demands non-stop adrenaline and bold visual storytelling.",
    match_score: 91,
  },
  {
    id: "4", title: "Parasite", genre: ["Thriller", "Drama"], description: "Greed and class discrimination threaten the symbiotic relationship between two families.", mood: "curious", pace: "medium", emotional_weight: 0.9, language: "Korean", year: 2019, rating: 8.5,
    poster: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a126b?w=400&h=600&fit=crop",
    explanation: "Your dark humor appreciation meets your analytical nature in this genre-bending masterpiece.",
    match_score: 94,
  },
  {
    id: "5", title: "The Grand Budapest Hotel", genre: ["Comedy", "Adventure"], description: "The adventures of a legendary concierge at a famous European hotel.", mood: "happy", pace: "fast", emotional_weight: 0.6, language: "English", year: 2014, rating: 8.1,
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    explanation: "Your social nature and wit align with Wes Anderson's colorful ensemble storytelling.",
    match_score: 89,
  },
  {
    id: "6", title: "Eternal Sunshine of the Spotless Mind", genre: ["Romance", "Sci-Fi"], description: "When their relationship turns sour, a couple undergoes a procedure to erase each other.", mood: "sad", pace: "slow", emotional_weight: 1.0, language: "English", year: 2004, rating: 8.3,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    explanation: "Your emotional depth will resonate with this beautiful exploration of memory and love.",
    match_score: 92,
  },
  {
    id: "7", title: "Whiplash", genre: ["Drama", "Music"], description: "A promising young drummer enrolls at a cutthroat music conservatory.", mood: "thrilled", pace: "fast", emotional_weight: 0.9, language: "English", year: 2014, rating: 8.5,
    poster: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=400&h=600&fit=crop",
    explanation: "Your analytical drive and passion for mastery mirror this intense pursuit of perfection.",
    match_score: 90,
  },
  {
    id: "8", title: "The Lobster", genre: ["Comedy", "Drama"], description: "In a dystopian near future, single people must find a partner or be transformed into an animal.", mood: "curious", pace: "slow", emotional_weight: 0.7, language: "English", year: 2015, rating: 7.1,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    explanation: "Your dark humor sensibility craves this absurdist take on modern relationships.",
    match_score: 85,
  },
  {
    id: "9", title: "Spirited Away", genre: ["Animation", "Fantasy"], description: "A young girl becomes trapped in a strange new world of spirits.", mood: "nostalgic", pace: "medium", emotional_weight: 0.8, language: "Japanese", year: 2001, rating: 8.6,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    explanation: "Your adventurous and emotional sides unite in this transcendent animated masterpiece.",
    match_score: 95,
  },
  {
    id: "10", title: "In Bruges", genre: ["Comedy", "Crime"], description: "Two hitmen are sent to Belgium after a botched job.", mood: "relaxed", pace: "medium", emotional_weight: 0.7, language: "English", year: 2008, rating: 7.9,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop",
    explanation: "Your dark humor and social personality align with this darkly comic gem.",
    match_score: 88,
  },
];

export const traitLabels: Record<keyof PersonalityProfile, string> = {
  adventurous: "Adventurous",
  emotional: "Emotional",
  analytical: "Analytical",
  social: "Social",
  darkHumor: "Dark Humor",
};

export const traitColors: Record<keyof PersonalityProfile, string> = {
  adventurous: "var(--trait-adventurous)",
  emotional: "var(--trait-emotional)",
  analytical: "var(--trait-analytical)",
  social: "var(--trait-social)",
  darkHumor: "var(--trait-dark-humor)",
};
