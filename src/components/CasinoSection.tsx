import React from "react";
import { CasinoBenefit } from "../types";
import { MiniCtaButton } from "./CtaButtons";
import { Coins, ShieldAlert, CheckCircle2 } from "lucide-react";

interface CasinoSectionProps {
  mainName: string;
  headline: string;
  subcopy: string;
  benefits: CasinoBenefit[];
  kakaoLink: string;
  telegramLink: string;
}

export const CasinoSection: React.FC<CasinoSectionProps> = ({
  mainName,
  headline,
  subcopy,
  benefits,
  kakaoLink,
  telegramLink,
}) => {
  return (
    <section id="casino" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative background image resembling warm poker felt or luxury vip chip blur */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-black to-black" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Visual card */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 opacity-20 blur-lg group-hover:opacity-45 transition-duration-300" />
            <div className="relative rounded-lg overflow-hidden bg-neutral-950 border border-gold-500/30 p-6 flex flex-col justify-between h-80">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-2">
                  Partnered Resort & Club
                </span>
                <span className="text-xl font-serif text-white block font-bold tracking-tight">
                  HOIANA RESORT
                </span>
                <span className="text-lg font-serif text-gold-500 block font-light">
                  & GOLF CASINO
                </span>
                <p className="mt-4 text-xs text-neutral-400 leading-relaxed font-light">
                  다낭 최고 수준의 정식 라이센스 VIP 카지노. 품위 있는 분위기 속에서 즐기는 완벽한 전용 프리미엄 정켓 롤링 시스템.
                </p>
              </div>

              {/* Casino chips aesthetic layout */}
              <div className="flex items-center justify-between border-t border-neutral-900 pt-4 mt-4">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-gold-500 animate-pulse" />
                  <span className="text-xs text-white font-bold">VIP ROLLING BENEFIT</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">SECURE PLAY</span>
              </div>
            </div>
          </div>

          {/* Description and benefits */}
          <div className="md:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-2">
              Casino Club Membership
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
              {headline}
            </h2>
            <h3 className="text-sm font-semibold text-gold-400 mb-6 tracking-wide">
              {subcopy}
            </h3>
            
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-light">
              다낭을 방문하시는 VIP를 위한 전문 카지노 케어 서비스입니다. 프라이빗 VIP 정켓 룸을 통해 안전하고 신뢰할 수 있으며, 롤링 수수료 정산 및 숙식, 리무진까지 논스톱 지원됩니다.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-100">{benefit.title}</h4>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-normal">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-between CTA for extreme conversion */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px]">
                <span className="text-[10px] text-gold-500 font-bold tracking-widest block uppercase">
                  Live Admin Counsel
                </span>
                <span className="text-[11px] text-neutral-400">
                  실시간 카지노 요율 및 룸 조건 사전 맞춤 상담
                </span>
              </div>
              <div className="flex gap-2">
                <MiniCtaButton link={kakaoLink} type="kakao" />
                <MiniCtaButton link={telegramLink} type="telegram" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
