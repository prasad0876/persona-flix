import { motion } from "framer-motion";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard = ({ movie, index }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative flex-shrink-0 w-[200px] md:w-[240px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-muted">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {movie.match_score && (
          <div className="absolute top-3 right-3 gradient-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {movie.match_score}% Match
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-sm font-bold text-foreground mb-1">{movie.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-primary font-semibold">★ {movie.rating}</span>
            <span className="text-xs text-muted-foreground">{movie.year}</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {movie.genre.map((g) => (
              <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                {g}
              </span>
            ))}
          </div>
          {movie.explanation && (
            <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
              {movie.explanation}
            </p>
          )}
        </div>
      </div>

      <div className="mt-2 px-1 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-sm font-medium text-foreground truncate">{movie.title}</h3>
        <p className="text-xs text-muted-foreground">{movie.genre.join(" · ")}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
