import React from "react";
import { Review } from "../types";
import { Star, User } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  // Generate stars array
  const starsArray = Array.from({ length: 5 }, (_, i) => i < review.rating);

  return (
    <div className="p-6 rounded-md bg-neutral-900/60 border border-neutral-800/80 hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-4 text-gold-500">
          {starsArray.map((filled, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${filled ? "fill-current" : "text-neutral-700"}`}
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light italic mb-6">
          “{review.text}”
        </p>
      </div>

      {/* Author and metadata */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-900/60 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-neutral-950 border border-gold-500/10 flex items-center justify-center text-gold-500">
            <User className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-bold text-neutral-200">{review.author}</div>
            <div className="text-[10px] text-gold-400 font-mono tracking-wider">{review.tag}</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-neutral-500">{review.date}</span>
      </div>
    </div>
  );
};
