import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import { usePersonality } from "@/hooks/usePersonality";
import PersonalityRadar from "@/components/PersonalityRadar";
import { traitLabels } from "@/data/movies";
import type { PersonalityProfile } from "@/data/movies";

const Profile = () => {
  const { hasCompletedQuiz, getNormalizedProfile, getDominantTrait, resetProfile } = usePersonality();
  const navigate = useNavigate();

  if (!hasCompletedQuiz) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">No personality data yet</h2>
          <p className="text-muted-foreground mb-6">Take the quiz to discover your viewing personality.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold"
          >
            Take the Quiz
          </motion.button>
        </div>
      </div>
    );
  }

  const normalized = getNormalizedProfile();
  const dominant = getDominantTrait();

  const traitDescriptions: Record<keyof PersonalityProfile, string> = {
    adventurous: "You crave thrills, exotic settings, and stories that push boundaries.",
    emotional: "You're drawn to deep human connections and stories that move the soul.",
    analytical: "You love puzzles, plot twists, and intellectually stimulating narratives.",
    social: "You enjoy ensemble casts, group dynamics, and stories about relationships.",
    darkHumor: "You appreciate absurdity, satire, and humor that challenges conventions.",
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Your Profile</h1>
            <p className="text-muted-foreground">
              Dominant trait:{" "}
              <span className="text-gradient font-semibold">{traitLabels[dominant]}</span>
            </p>
          </div>

          <div className="glass-surface rounded-xl p-6 mb-6">
            <p className="text-foreground leading-relaxed">{traitDescriptions[dominant]}</p>
          </div>

          <PersonalityRadar profile={normalized} />

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                resetProfile();
                navigate("/");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-secondary text-secondary-foreground text-sm font-medium hover:border-primary/30 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
