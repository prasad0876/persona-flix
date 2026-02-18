import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { usePersonality } from "@/hooks/usePersonality";
import PersonalityQuiz from "@/components/PersonalityQuiz";
import type { PersonalityProfile } from "@/data/movies";

const Landing = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const { hasCompletedQuiz, updateProfile, completeQuiz } = usePersonality();
  const navigate = useNavigate();

  const handleQuizComplete = (traits: Partial<PersonalityProfile>) => {
    updateProfile(traits);
    completeQuiz();
    navigate("/discover");
  };

  if (showQuiz) {
    return <PersonalityQuiz onComplete={handleQuizComplete} />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-background/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Recommendations
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Movies that{" "}
              <span className="text-gradient">understand</span>
              <br />
              who you are
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              PersonaFlix maps your personality to discover films you'll truly love.
              Not just what's popular — what's{" "}
              <span className="text-foreground font-medium">perfect for you</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {hasCompletedQuiz ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/discover")}
                  className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary/25"
                >
                  View Your Picks
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowQuiz(true)}
                  className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg shadow-primary/25"
                >
                  Discover Your Type
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Personality Mapping",
                desc: "A quick quiz reveals your unique viewing personality across 5 dimensions.",
              },
              {
                icon: Sparkles,
                title: "Smart Matching",
                desc: "ML clustering and cosine similarity find films that truly resonate with you.",
              },
              {
                icon: Users,
                title: "Group Rooms",
                desc: "Find the perfect movie for your friend group with optimized satisfaction scoring.",
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-surface rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
