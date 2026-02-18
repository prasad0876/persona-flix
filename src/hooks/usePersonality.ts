import { useState, useCallback } from "react";
import type { PersonalityProfile } from "@/data/movies";

const defaultProfile: PersonalityProfile = {
  adventurous: 0,
  emotional: 0,
  analytical: 0,
  social: 0,
  darkHumor: 0,
};

export function usePersonality() {
  const [profile, setProfile] = useState<PersonalityProfile>(() => {
    const saved = localStorage.getItem("personaflix_profile");
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(() => {
    return localStorage.getItem("personaflix_quiz_done") === "true";
  });

  const updateProfile = useCallback((traits: Partial<PersonalityProfile>) => {
    setProfile((prev) => {
      const updated = { ...prev };
      for (const [key, value] of Object.entries(traits)) {
        updated[key as keyof PersonalityProfile] =
          (updated[key as keyof PersonalityProfile] || 0) + (value || 0);
      }
      localStorage.setItem("personaflix_profile", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const completeQuiz = useCallback(() => {
    setHasCompletedQuiz(true);
    localStorage.setItem("personaflix_quiz_done", "true");
  }, []);

  const resetProfile = useCallback(() => {
    setProfile(defaultProfile);
    setHasCompletedQuiz(false);
    localStorage.removeItem("personaflix_profile");
    localStorage.removeItem("personaflix_quiz_done");
  }, []);

  const getDominantTrait = useCallback((): keyof PersonalityProfile => {
    const entries = Object.entries(profile) as [keyof PersonalityProfile, number][];
    return entries.reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  }, [profile]);

  const getNormalizedProfile = useCallback(() => {
    const max = Math.max(...Object.values(profile), 1);
    const normalized: Record<string, number> = {};
    for (const [key, value] of Object.entries(profile)) {
      normalized[key] = Math.round((value / max) * 100);
    }
    return normalized as Record<keyof PersonalityProfile, number>;
  }, [profile]);

  return {
    profile,
    hasCompletedQuiz,
    updateProfile,
    completeQuiz,
    resetProfile,
    getDominantTrait,
    getNormalizedProfile,
  };
}
