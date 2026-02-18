import { motion } from "framer-motion";
import { moods } from "@/data/movies";

interface MoodSelectorProps {
  selectedMood: string | null;
  onSelect: (mood: string) => void;
}

const MoodSelector = ({ selectedMood, onSelect }: MoodSelectorProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-3">How are you feeling?</h2>
      <div className="flex flex-wrap gap-3">
        {moods.map((mood) => (
          <motion.button
            key={mood.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(mood.id === selectedMood ? "" : mood.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              selectedMood === mood.id
                ? "border-primary bg-primary/20 text-foreground shadow-lg shadow-primary/20"
                : "border-border bg-secondary text-secondary-foreground hover:border-muted-foreground/30"
            }`}
          >
            {mood.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
