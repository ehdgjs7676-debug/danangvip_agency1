import React from "react";
import { GolfClub } from "../types";
import { MiniCtaButton } from "./CtaButtons";
import { MapPin, Trophy, Calendar, Car } from "lucide-react";

interface GolfSectionProps {
  headline: string;
  subcopy: string;
  clubs: GolfClub[];
  kakaoLink: string;
  telegramLink: string;
}

export const GolfSection: React.FC<GolfSectionProps> = ({
  headline,
  subcopy,
  clubs,
  kakaoLink,
  telegramLink,
}) => {
  return (
    <section id="golf" className="py-20 px-4 bg-black relative">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-950/20 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Elite Golf Tour
          </span>
          <h2 className="text-xl sm:text-2xl font-serif text-white tracking-widest leading-relaxed mb-4">
            {headline}
          </h2>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            {subcopy}
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs text-gold-400 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> 실시간 예약 지원
            </span>
            <span className="text-neutral-700">|</span>
            <span className="flex items-center gap-1">
              <Car className="w-3.5 h-3.5" /> 전용 차량 이동 포함
            </span>
          </div>
        </div>

        {/* Carousel / Vertical Stack style (Perfect for Korean Mobile format) */}
        <div className="flex flex-col gap-10">
          {clubs.map((club, index) => (
            <div
              key={club.id}
              className="group bg-neutral-950 border border-neutral-900 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-300 hover:border-gold-500/20"
            >
              <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden min-h-[240px]">
                {/* Fallback pattern overlaid */}
                <img
                  src={club.image}
                  alt={club.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-gold-500/30 px-3 py-1 rounded inline-flex items-center gap-1 text-[11px] font-bold text-gold-400">
                  <MapPin className="w-3 h-3" />
                  {club.location}
                </div>
              </div>

              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-gold-500" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                      추천 명문 프리미엄 코스 {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    {club.name}
                  </h3>
                  <span className="text-[11px] font-mono tracking-wider text-neutral-500 block mb-4">
                    {club.englishName}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {club.description}
                  </p>
                </div>

                {/* Features Badges */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {club.features && club.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] bg-neutral-900 text-neutral-300 px-3 py-1.5 rounded border border-neutral-800"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Immediate Action Row to boost conversions */}
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-900">
                    <span className="text-xs text-neutral-500">
                      즉시 부킹 우선 배정 가능
                    </span>
                    <MiniCtaButton link={telegramLink} type="telegram" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Transition VIP card */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-12">
          <div className="inline-block p-8 rounded-lg bg-neutral-950 border border-gold-500/10 max-w-xl text-center">
            <h4 className="text-sm font-bold text-white mb-2">골프 백 패키지 풀 케어 서비스</h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              골프 클럽 해외 수하물 운송 예약, 공항 리무진 픽업, 현지 골프장 캐디 의사소통 세팅까지 원클릭으로 종결합니다.
            </p>
            <div className="flex justify-center gap-3">
              <MiniCtaButton link={kakaoLink} type="kakao" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
