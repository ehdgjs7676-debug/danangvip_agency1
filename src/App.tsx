/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AppContent } from "./types";
import { defaultAppContent } from "./defaultData";
import { CtaButtons, MiniCtaButton } from "./components/CtaButtons";
import { VipBenefitsSection } from "./components/VipBenefitsSection";
import { GolfSection } from "./components/GolfSection";
import { NightLifeSection } from "./components/NightLifeSection";
import { CasinoSection } from "./components/CasinoSection";
import { ReviewCard } from "./components/ReviewCard";
import { AdminPanel } from "./components/AdminPanel";
import { 
  Crown, 
  Settings, 
  ChevronRight, 
  Lock, 
  HelpCircle, 
  MessageSquare, 
  PhoneCall, 
  ArrowUp,
  Menu,
  X 
} from "lucide-react";

export default function App() {
  // Safe state initialization from localStorage with lazy evaluation
  const [appContent, setAppContent] = useState<AppContent>(() => {
    const saved = localStorage.getItem("danang_vip_content");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved admin content", e);
      }
    }
    return defaultAppContent;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Synchronize update with LocalStorage
  const handleSaveAdminData = (updatedData: AppContent) => {
    setAppContent(updatedData);
    localStorage.setItem("danang_vip_content", JSON.stringify(updatedData));
  };

  // Scroll to top dynamic button helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-gold-500/30 selection:text-white font-sans">
      
      {/* Floating Fast Action Banner - Mobile-Focused High Conversion Element */}
      <div className="bg-neutral-900 border-b border-gold-500/20 py-2.5 px-4 text-center text-xs text-neutral-300 relative z-30 flex items-center justify-between sm:justify-center gap-4">
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-gold-400 font-mono text-[10px] sm:text-xs">LIVE</span>
          <span>{appContent.counselText}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href={appContent.kakaoLink} target="_blank" rel="noopener noreferrer" className="text-[11px] text-gold-400 hover:underline">카톡 빠른 연결</a>
          <span className="text-neutral-700">|</span>
          <a href={appContent.telegramLink} target="_blank" rel="noopener noreferrer" className="text-[11px] text-neutral-400 hover:underline">텔레그램 고객지원</a>
        </div>
      </div>

      {/* Elegant Header Layout */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-neutral-900/60 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Crown className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-[0.2em] text-white">DANANG VIP</span>
              <span className="text-[8px] tracking-[0.3em] text-gold-500 font-mono">PREMIUM CLUB</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider text-neutral-300 uppercase">
            <a href="#vip-benefits" className="hover:text-gold-400 transition-colors">VIP 혜택</a>
            <a href="#golf" className="hover:text-gold-400 transition-colors">골프 투어</a>
            <a href="#nightlife" className="hover:text-gold-400 transition-colors">밤문화 케어</a>
            <a href="#casino" className="hover:text-gold-400 transition-colors">카지노 롤링</a>
            <a href="#reviews" className="hover:text-gold-400 transition-colors">리얼 후기</a>
          </nav>

          {/* CTA & Admin Control Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-gold-500 hover:border-gold-500/30 transition-all text-xs flex items-center gap-1.5 font-mono"
              title="관리자 설정"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[10px] font-bold">ADMIN</span>
            </button>
            <a
              href={appContent.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold rounded text-black bg-gradient-to-r from-gold-400 to-gold-500 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              실시간 문의
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-900 px-4 py-6 space-y-4">
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-neutral-300">
              <a href="#vip-benefits" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold-400 border-b border-neutral-900">✈ VIP 최고급 혜택</a>
              <a href="#golf" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold-400 border-b border-neutral-900">⛳ 프리미엄 골프장</a>
              <a href="#nightlife" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold-400 border-b border-neutral-900">🥂 다낭 나이트 라이프</a>
              <a href="#casino" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold-400 border-b border-neutral-900">🎰 VIP 카지노 멤버십</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gold-400 border-b border-neutral-900 font-bold">⭐️ 실사용 생생 후기</a>
            </div>
            <div className="flex gap-2 pt-4">
              <a
                href={appContent.kakaoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded text-xs text-black font-bold gold-gradient"
              >
                카카오톡 실시간 상담
              </a>
              <a
                href={appContent.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded text-xs text-white bg-neutral-900 border border-neutral-800 font-bold"
              >
                텔레그램 문의
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: UPPER HERO AREA */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
        {/* Dynamic Image Overlay Backing */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=1920&q=80"
            alt="Danang VIP Nightview"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 filter brightness-[0.5] scale-105"
          />
          {/* Radial Luxury Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
          <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_transparent_40%,_black_90%)" />
        </div>

        {/* Hero content card */}
        <div className="relative z-10 w-full max-w-2xl text-center">
          
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-[0.25em] mb-6 animate-fade-in shadow-lg shadow-gold-500/5">
            <Crown className="w-3.5 h-3.5 fill-current" />
            {appContent.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.1em] text-white gold-glow font-sans leading-tight mb-2">
            {appContent.heroHeadline}
          </h1>
          
          <div className="w-20 h-[2px] bg-gold-500 mx-auto my-6" />

          <p className="text-sm sm:text-base md:text-lg font-light tracking-[0.05em] text-neutral-300 leading-relaxed max-w-xl mx-auto mb-10">
            {appContent.heroSubcopy}
          </p>

          {/* Core double CTA button */}
          <div className="flex justify-center mb-6">
            <CtaButtons
              kakaoLink={appContent.kakaoLink}
              telegramLink={appContent.telegramLink}
            />
          </div>

          {/* Counsel Wait Status */}
          <div className="text-center text-xs text-neutral-500 tracking-wider">
            <span className="border-b border-neutral-900 pb-1 inline-block">
              {appContent.counselText}
            </span>
          </div>

        </div>

        {/* Decorative ambient indicators (Highly elegant, humble luxury) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 text-[10px] tracking-[0.3em] font-mono animate-bounce uppercase">
          <span>Scroll down for VIP Experience</span>
          <span className="text-gold-500">▼</span>
        </div>
      </section>

      {/* SECTION 2: VIP BENEFITS GRID */}
      <VipBenefitsSection
        benefits={appContent.vipBenefits}
        kakaoLink={appContent.kakaoLink}
      />

      {/* SECTION 3: GOLF EXPERIENCE */}
      <GolfSection
        headline={appContent.golfHeadline}
        subcopy={appContent.golfSubcopy}
        clubs={appContent.golfClubs}
        kakaoLink={appContent.kakaoLink}
        telegramLink={appContent.telegramLink}
      />

      {/* SECTION 4: NIGHT LIFE PREMIUM GRID */}
      <NightLifeSection
        headline={appContent.nightHeadline}
        subcopy={appContent.nightSubcopy}
        items={appContent.nightLifeItems}
        kakaoLink={appContent.kakaoLink}
      />

      {/* SECTION 5: CASINO VIP MEMBERSHIP */}
      <CasinoSection
        mainName={appContent.casinoMainName}
        headline={appContent.casinoHeadline}
        subcopy={appContent.casinoSubcopy}
        benefits={appContent.casinoBenefits}
        kakaoLink={appContent.kakaoLink}
        telegramLink={appContent.telegramLink}
      />

      {/* SECTION 6: REAL CUSTOMER REVIEWS */}
      <section id="reviews" className="py-20 px-4 bg-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
              Trust & Satisfaction
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white tracking-widest mb-4">
              REAL REVIEWS
            </h2>
            <div className="w-12 h-[1px] bg-gold-900/60 mx-auto" />
            <p className="mt-4 text-xs text-neutral-400">
              다낭 VIP 클럽 멤버십을 이용해주신 소중한 회원분들의 무보정 리얼 후기입니다.
            </p>
          </div>

          {/* Cards list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appContent.reviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>

          <div className="mt-12 text-center bg-black/40 border border-neutral-900 p-6 rounded-md max-w-lg mx-auto">
            <p className="text-xs text-neutral-400 mb-3 block">
              가장 믿고 맡길 수 있는 24시간 의전 시스템. 지금 바로 설계해보세요.
            </p>
            <MiniCtaButton link={appContent.kakaoLink} type="kakao" />
          </div>

        </div>
      </section>

      {/* SECTION 7: FINAL CTA & SIGN OFF */}
      <section className="py-24 px-4 bg-black relative border-t border-neutral-950">
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          <Crown className="w-10 h-10 text-gold-500 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wider mb-2">
            지금 다낭 최고의 VIP 서비스를 <br/>
            직접 경험해 보십시오.
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed mb-10 max-w-md mx-auto">
            원하는 일정에 최첨단 전용 스케줄링을 연계하여, 비즈니스 및 장기 휴양을 세상에서 가장 품격 있게 완성시킵니다.
          </p>

          <div className="flex justify-center mb-10">
            <CtaButtons
              kakaoLink={appContent.kakaoLink}
              telegramLink={appContent.telegramLink}
            />
          </div>

          <p className="text-[10px] text-neutral-500 tracking-widest font-mono uppercase">
            DANANG VIP CLUB • PREMIUM MEMBERSHIP SERVICE
          </p>
        </div>
      </section>

      {/* LUXURY FOOTER BRANDING */}
      <footer className="bg-neutral-950 border-t border-neutral-900/60 text-neutral-500 py-12 px-4 transition-all">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-white">
              <Crown className="w-4 h-4 text-gold-500" />
              <span className="font-bold tracking-[0.25em] text-xs">DANANG VIP CLUB</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed max-w-md">
              다낭 VIP 클럽은 해외 정식 라이센스 준수 오퍼레이터들과 연계되어 안전하고 격조 높은 컨시어지 서비스 및 롤링, 스파, 라운드 예약을 중개합니다.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex justify-center gap-4 text-neutral-400">
              <a href="#vip-benefits" className="hover:text-gold-400 transition-colors">VIP 혜택</a>
              <span>·</span>
              <a href="#golf" className="hover:text-gold-400 transition-colors">골프 투어</a>
              <span>·</span>
              <a href="#nightlife" className="hover:text-gold-400 transition-colors">밤문화 케어</a>
              <span>·</span>
              <button onClick={() => setIsAdminOpen(true)} className="text-gold-500 hover:underline font-bold flex items-center gap-1 font-mono">
                <Lock className="w-2.5 h-2.5" /> ADMIN SYSTEM
              </button>
            </div>
            <p className="text-[10px] text-neutral-600">
              &copy; {new Date().getFullYear()} DANANG VIP CLUB. All Rights Reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="맨 위로 가기"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* ADMIN CONTROL PANEL MODAL FOR DYNAMIC PORTFOLIO EDITS */}
      {isAdminOpen && (
        <AdminPanel
          appContent={appContent}
          onSave={handleSaveAdminData}
          onClose={() => setIsAdminOpen(false)}
        />
      )}

    </div>
  );
}
