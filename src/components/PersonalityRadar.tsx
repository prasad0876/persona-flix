import { motion } from "framer-motion";
import type { PersonalityProfile } from "@/data/movies";
import { traitLabels } from "@/data/movies";

interface PersonalityRadarProps {
  profile: Record<keyof PersonalityProfile, number>;
}

const traitColorMap: Record<keyof PersonalityProfile, string> = {
  adventurous: "hsl(25, 95%, 55%)",
  emotional: "hsl(340, 82%, 55%)",
  analytical: "hsl(210, 80%, 55%)",
  social: "hsl(145, 65%, 50%)",
  darkHumor: "hsl(270, 60%, 55%)",
};

const PersonalityRadar = ({ profile }: PersonalityRadarProps) => {
  const traits = Object.entries(profile) as [keyof PersonalityProfile, number][];
  const maxVal = Math.max(...traits.map(([, v]) => v), 1);

  return (
    <div className="glass-surface rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">Your Personality DNA</h3>
      <div className="space-y-4">
        {traits.map(([key, value], i) => {
          const percent = Math.round((value / maxVal) * 100);
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-foreground">{traitLabels[key]}</span>
                <span className="text-xs text-muted-foreground">{percent}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: traitColorMap[key] }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalityRadar;
