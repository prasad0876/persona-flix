import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/data/movies";
import type { PersonalityProfile } from "@/data/movies";

interface PersonalityQuizProps {
  onComplete: (traits: Partial<PersonalityProfile>) => void;
}

const PersonalityQuiz = ({ onComplete }: PersonalityQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [accumulated, setAccumulated] = useState<Partial<PersonalityProfile>>({});

  const question = quizQuestions[currentQ];

  const handleSelect = (traits: Partial<PersonalityProfile>) => {
    const merged: Partial<PersonalityProfile> = { ...accumulated };
    for (const [key, value] of Object.entries(traits)) {
      merged[key as keyof PersonalityProfile] =
        (merged[key as keyof PersonalityProfile] || 0) + (value || 0);
    }

    if (currentQ < quizQuestions.length - 1) {
      setAccumulated(merged);
      setCurrentQ((prev) => prev + 1);
    } else {
      onComplete(merged);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                i <= currentQ ? "gradient-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Question {currentQ + 1} of {quizQuestions.length}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
              {question.question}
            </h2>

            <div className="grid gap-3">
              {question.options.map((option, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(option.traits)}
                  className="text-left p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent transition-all duration-300 group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersonalityQuiz;
