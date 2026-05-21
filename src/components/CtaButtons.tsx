import React from "react";
import { MessageCircle, Send } from "lucide-react";

interface CtaButtonsProps {
  kakaoLink: string;
  telegramLink: string;
  className?: string;
  centered?: boolean;
}

export const CtaButtons: React.FC<CtaButtonsProps> = ({
  kakaoLink,
  telegramLink,
  className = "",
  centered = false,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${
        centered ? "mx-auto justify-center" : ""
      } ${className}`}
    >
      <a
        href={kakaoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-md font-bold text-black uppercase tracking-wider transition-all duration-300 gold-gradient hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 text-sm whitespace-nowrap"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        카카오톡 1:1 상담
      </a>
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-md font-bold text-white uppercase tracking-wider transition-all duration-300 bg-black border border-gold-500/50 hover:border-gold-500 hover:bg-gold-950/20 hover:scale-[1.02] active:scale-[0.98] text-sm whitespace-nowrap"
      >
        <Send className="w-5 h-5 fill-current text-gold-300" />
        텔레그램 문의
      </a>
    </div>
  );
};

export const MiniCtaButton: React.FC<{ link: string; type: "kakao" | "telegram" }> = ({
  link,
  type,
}) => {
  if (type === "kakao") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-black gold-gradient text-xs shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        실시간 카톡 상담하기
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-neutral-900 border border-gold-500/60 text-xs shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <Send className="w-4 h-4 fill-current text-gold-400" />
      텔레그램 VIP 문의
    </a>
  );
};
