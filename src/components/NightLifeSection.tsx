import React from "react";
import { NightLifeItem } from "../types";
import { MiniCtaButton } from "./CtaButtons";
import { Moon, Star } from "lucide-react";

interface NightLifeSectionProps {
  headline: string;
  subcopy: string;
  items: NightLifeItem[];
  kakaoLink: string;
}

export const NightLifeSection: React.FC<NightLifeSectionProps> = ({
  headline,
  subcopy,
  items,
  kakaoLink,
}) => {
  return (
    <section id="nightlife" className="py-20 px-4 bg-neutral-950 border-t border-neutral-900 overflow-hidden relative">
      {/* Background neon style accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-indigo-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3">
            <Moon className="w-3.5 h-3.5 text-gold-500 fill-current" /> Premium Night life
          </span>
          <h2 className="text-xl sm:text-2xl font-serif text-white tracking-widest mb-4">
            {headline}
          </h2>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            {subcopy}
          </p>
          <div className="w-12 h-[1px] bg-gold-900/60 mx-auto mt-6" />
        </div>

        {/* 6 Grid (Bento style / card vertical list) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative h-48 sm:h-56 rounded-md overflow-hidden bg-black border border-neutral-900 hover:border-gold-500/30 transition-all duration-300 shadow-xl"
            >
              {/* Image with overlay */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.8]"
              />

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

              {/* Title & Overlay Information */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[9px] font-mono tracking-wider text-gold-400 uppercase block mb-1">
                  {item.englishTitle}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] text-neutral-400 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block max-h-0 group-hover:max-h-12 overflow-hidden">
                  {item.description}
                </p>
              </div>

              {/* Little corner star decorative */}
              <div className="absolute top-3 right-3 text-gold-500 opacity-60">
                <Star className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Night Life conversion CTA */}
        <div className="mt-12 text-center p-6 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-md">
          <p className="text-xs text-neutral-300 mb-4">
             다낭의 최고의 명소, 예약이 밀리는 스파 및 룸까지 프리미엄 라인으로 동선 중단 없이 연계가 완료됩니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-[11px] text-neutral-400">현지 실시간 예약 실장 대기 중</span>
            <MiniCtaButton link={kakaoLink} type="kakao" />
          </div>
        </div>
      </div>
    </section>
  );
};
