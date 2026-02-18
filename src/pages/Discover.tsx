import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { mockMovies } from "@/data/movies";
import { usePersonality } from "@/hooks/usePersonality";
import MovieRow from "@/components/MovieRow";
import MoodSelector from "@/components/MoodSelector";
import PersonalityQuiz from "@/components/PersonalityQuiz";
import type { PersonalityProfile } from "@/data/movies";

const Discover = () => {
  const { hasCompletedQuiz, updateProfile, completeQuiz, getDominantTrait } = usePersonality();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleQuizComplete = (traits: Partial<PersonalityProfile>) => {
    updateProfile(traits);
    completeQuiz();
  };

  const filteredMovies = useMemo(() => {
    if (selectedMood) {
      return mockMovies.filter((m) => m.mood === selectedMood);
    }
    return mockMovies;
  }, [selectedMood]);

  const topPicks = useMemo(() => {
    return [...mockMovies].sort((a, b) => (b.match_score || 0) - (a.match_score || 0)).slice(0, 5);
  }, []);

  const byGenre = useMemo(() => {
    const genres: Record<string, typeof mockMovies> = {};
    filteredMovies.forEach((m) => {
      m.genre.forEach((g) => {
        if (!genres[g]) genres[g] = [];
        genres[g].push(m);
      });
    });
    return genres;
  }, [filteredMovies]);

  if (!hasCompletedQuiz) {
    return <PersonalityQuiz onComplete={handleQuizComplete} />;
  }

  const dominant = getDominantTrait();
  const traitNameMap: Record<keyof PersonalityProfile, string> = {
    adventurous: "Explorer",
    emotional: "Empath",
    analytical: "Strategist",
    social: "Connector",
    darkHumor: "Provocateur",
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-gradient">{traitNameMap[dominant]}</span>
          </h1>
          <p className="text-muted-foreground">Here's what we've curated based on your personality.</p>
        </motion.div>

        <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />

        {!selectedMood && <MovieRow title="🎯 Top Picks for You" movies={topPicks} />}

        {Object.entries(byGenre).map(([genre, movies]) => (
          <MovieRow key={genre} title={genre} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
