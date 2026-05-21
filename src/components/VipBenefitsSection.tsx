import React from "react";
import * as Icons from "lucide-react";
import { VIPBenefit } from "../types";
import { MiniCtaButton } from "./CtaButtons";

interface VipBenefitsSectionProps {
  benefits: VIPBenefit[];
  kakaoLink: string;
}

export const VipBenefitsSection: React.FC<VipBenefitsSectionProps> = ({
  benefits,
  kakaoLink,
}) => {
  return (
    <section id="vip-benefits" className="py-20 px-4 bg-neutral-950 border-t border-b border-gold-900/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            exclusive luxury
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-4">
            ONLY FOR <span className="text-gold-500 font-sans font-bold">VIP MEMBERS</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-500/60 mx-auto" />
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            공항 도착부터 출국하시는 순간까지, 다낭 최고 등급의 의전 및 롤링 케어 멤버십 서비스를 보장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            // Dynamically resolve lucide icons
            const IconComponent = (Icons as any)[benefit.iconName] || Icons.HelpCircle;
            return (
              <div
                key={benefit.id}
                className="bento-card hover:border-gold-500/50 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="p-3 rounded-md bg-neutral-950 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-100 group-hover:text-gold-400 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Kakao CTA inserted in sections to increase conversion */}
        <div className="mt-12 text-center bg-neutral-900/40 border border-gold-950/40 p-6 rounded-md max-w-lg mx-auto backdrop-blur-sm">
          <p className="text-xs text-neutral-400 mb-3">
            모든 혜택은 실시간 맞춤 매칭 및 프라이빗 조건 조정 가능합니다.
          </p>
          <MiniCtaButton link={kakaoLink} type="kakao" />
        </div>
      </div>
    </section>
  );
};
