import React, { useState } from "react";
import { AppContent, GolfClub, NightLifeItem, Review, CasinoBenefit } from "../types";
import { Lock, Unlock, Save, Plus, Trash2, Edit3, X, Eye, HelpCircle } from "lucide-react";

interface AdminPanelProps {
  appContent: AppContent;
  onSave: (newContent: AppContent) => void;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  appContent,
  onSave,
  onClose,
}) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"general" | "golf" | "night" | "reviews">("general");

  // Local state to store edits before saving globally
  const [localContent, setLocalContent] = useState<AppContent>({ ...appContent });

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1224asas!!") {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
    }
  };

  // Handle generalized text field change
  const handleChange = (field: keyof Omit<AppContent, "reviews" | "golfClubs" | "nightLifeItems" | "casinoBenefits" | "vipBenefits">, value: string) => {
    setLocalContent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Golf Club Handlers
  const handleGolfChange = (index: number, field: keyof GolfClub, value: any) => {
    const updatedClubs = [...localContent.golfClubs];
    updatedClubs[index] = { ...updatedClubs[index], [field]: value };
    setLocalContent((prev) => ({ ...prev, golfClubs: updatedClubs }));
  };

  const handleGolfFeatureChange = (clubIndex: number, featureIndex: number, value: string) => {
    const updatedClubs = [...localContent.golfClubs];
    const updatedFeatures = [...updatedClubs[clubIndex].features];
    updatedFeatures[featureIndex] = value;
    updatedClubs[clubIndex] = { ...updatedClubs[clubIndex], features: updatedFeatures };
    setLocalContent((prev) => ({ ...prev, golfClubs: updatedClubs }));
  };

  const addGolfFeature = (clubIndex: number) => {
    const updatedClubs = [...localContent.golfClubs];
    const updatedFeatures = [...updatedClubs[clubIndex].features, "새로운 특징"];
    updatedClubs[clubIndex] = { ...updatedClubs[clubIndex], features: updatedFeatures };
    setLocalContent((prev) => ({ ...prev, golfClubs: updatedClubs }));
  };

  // NightLife Handlers
  const handleNightChange = (index: number, field: keyof NightLifeItem, value: string) => {
    const updatedItems = [...localContent.nightLifeItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setLocalContent((prev) => ({ ...prev, nightLifeItems: updatedItems }));
  };

  // Review Handlers
  const handleReviewChange = (index: number, field: keyof Review, value: any) => {
    const updatedReviews = [...localContent.reviews];
    updatedReviews[index] = { ...updatedReviews[index], [field]: value };
    setLocalContent((prev) => ({ ...prev, reviews: updatedReviews }));
  };

  const addReview = () => {
    const newReview: Review = {
      id: `rev_${Date.now()}`,
      rating: 5,
      text: "여기에 새로운 생생 고객 후기 내용을 적어라.",
      author: "VIP 회원",
      date: new Date().toISOString().slice(0, 10).replace(/-/g, "."),
      tag: "프리미엄 투어 이용"
    };
    setLocalContent((prev) => ({
      ...prev,
      reviews: [newReview, ...prev.reviews],
    }));
  };

  const deleteReview = (id: string) => {
    setLocalContent((prev) => ({
      ...prev,
      reviews: prev.reviews.filter((r) => r.id !== id),
    }));
  };

  // Save changes
  const handleSaveAll = () => {
    onSave(localContent);
    alert("다낭 VIP 클럽 관리자 설정이 안전하게 저장 및 배포되었습니다!");
    onClose();
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-neutral-950 border border-gold-500/30 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-6">
            <Lock className="w-10 h-10 text-gold-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">
              ADMIN CONTROL CENTER
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              관리자 비밀번호를 입력해주세요. <br/>
              (비밀번호: 1224asas!!)
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-gold-400 uppercase mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-sm p-3 rounded-md text-white placeholder-neutral-600 outline-none transition-colors"
                autoFocus
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs py-3 text-white rounded-md font-semibold font-mono"
              >
                CLOSE
              </button>
              <button
                type="submit"
                className="flex-1 gold-gradient text-xs py-3 font-semibold text-black rounded-md hover:opacity-90"
              >
                UNLOCK
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl bg-neutral-950 border border-gold-500/40 rounded-lg shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Admin Header */}
        <div className="p-6 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gold-500 text-black flex items-center justify-center font-bold">
              <Unlock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                DANANG VIP CLUB ADMIN
              </h2>
              <p className="text-[10px] text-gold-400 font-mono">AUTHORIZED ACCESSED</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-neutral-800 text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-neutral-900 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab("general")}
            className={`whitespace-nowrap px-6 py-4 font-bold border-b-2 transition-colors ${
              activeTab === "general"
                ? "border-gold-500 text-gold-400 bg-neutral-900/40"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            기본 정보 & CTA 링크
          </button>
          <button
            onClick={() => setActiveTab("golf")}
            className={`whitespace-nowrap px-6 py-4 font-bold border-b-2 transition-colors ${
              activeTab === "golf"
                ? "border-gold-500 text-gold-400 bg-neutral-900/40"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            골프 포트폴리오 (Section 3)
          </button>
          <button
            onClick={() => setActiveTab("night")}
            className={`whitespace-nowrap px-6 py-4 font-bold border-b-2 transition-colors ${
              activeTab === "night"
                ? "border-gold-500 text-gold-400 bg-neutral-900/40"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            나이트 라이프 (Section 4)
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`whitespace-nowrap px-6 py-4 font-bold border-b-2 transition-colors ${
              activeTab === "reviews"
                ? "border-gold-500 text-gold-400 bg-neutral-900/40"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            리얼 후기 편집 (Section 6)
          </button>
        </div>

        {/* Tab Contents Scroll Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: General Info */}
          {activeTab === "general" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
                  상단 히어로 문구 및 문의 링크
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">HERO HEADLINE</label>
                    <input
                      type="text"
                      value={localContent.heroHeadline}
                      onChange={(e) => handleChange("heroHeadline", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">HERO BADGE (멤버십 텍스트)</label>
                    <input
                      type="text"
                      value={localContent.heroBadge}
                      onChange={(e) => handleChange("heroBadge", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">HERO SUBCOPY</label>
                    <input
                      type="text"
                      value={localContent.heroSubcopy}
                      onChange={(e) => handleChange("heroSubcopy", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">카카오톡 문의 전문 주소 (모든 전환 버튼에 연계)</label>
                    <input
                      type="text"
                      value={localContent.kakaoLink}
                      onChange={(e) => handleChange("kakaoLink", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white text-gold-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">텔레그램 문의 전문 주소 (모든 전환 버튼에 연계)</label>
                    <input
                      type="text"
                      value={localContent.telegramLink}
                      onChange={(e) => handleChange("telegramLink", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white text-gold-400 font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">상담대기 안내 문구 (최상단 HERO 밑 노출)</label>
                    <input
                      type="text"
                      value={localContent.counselText}
                      onChange={(e) => handleChange("counselText", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-900">
                <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
                  카지노 정보 편집 (Section 5)
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">카지노 제휴 리조트 텍스트</label>
                    <input
                      type="text"
                      value={localContent.casinoMainName}
                      onChange={(e) => handleChange("casinoMainName", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">카지노 타이틀</label>
                      <input
                        type="text"
                        value={localContent.casinoHeadline}
                        onChange={(e) => handleChange("casinoHeadline", e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">카지노 서브카피</label>
                      <input
                        type="text"
                        value={localContent.casinoSubcopy}
                        onChange={(e) => handleChange("casinoSubcopy", e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Golf Clubs Portfolio */}
          {activeTab === "golf" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">골프장 섹션 기본 텍스트</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프장 헤드라인</label>
                    <input
                      type="text"
                      value={localContent.golfHeadline}
                      onChange={(e) => handleChange("golfHeadline", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프장 서브 타이틀</label>
                    <input
                      type="text"
                      value={localContent.golfSubcopy}
                      onChange={(e) => handleChange("golfSubcopy", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                </div>
              </div>

              {localContent.golfClubs.map((club, cIdx) => (
                <div key={club.id} className="p-4 rounded bg-neutral-900 border border-neutral-800 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                    <span className="text-xs font-bold text-gold-400">포트폴리오 고유 코스 {cIdx + 1} ({club.name})</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프코스 이름 (한글)</label>
                      <input
                        type="text"
                        value={club.name}
                        onChange={(e) => handleGolfChange(cIdx, "name", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-xs p-3 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프코스 이름 (영문)</label>
                      <input
                        type="text"
                        value={club.englishName}
                        onChange={(e) => handleGolfChange(cIdx, "englishName", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-xs p-3 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">위치 정보</label>
                      <input
                        type="text"
                        value={club.location}
                        onChange={(e) => handleGolfChange(cIdx, "location", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-xs p-3 rounded text-white"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프장 이미지 주소 (CDN or Unsplash)</label>
                      <input
                        type="text"
                        value={club.image}
                        onChange={(e) => handleGolfChange(cIdx, "image", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-xs p-3 rounded text-gold-300 font-mono"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-[10px] text-neutral-400 font-bold mb-1">골프장 간단 설명</label>
                      <textarea
                        value={club.description}
                        onChange={(e) => handleGolfChange(cIdx, "description", e.target.value)}
                        rows={3}
                        className="w-full bg-neutral-950 border border-neutral-800 text-xs p-3 rounded text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-[10px] text-neutral-400 font-bold mb-2">골프장 대표 태그 특징 수정</label>
                    <div className="grid grid-cols-2 gap-2">
                      {club.features.map((feat, fIdx) => (
                        <input
                          key={fIdx}
                          type="text"
                          value={feat}
                          onChange={(e) => handleGolfFeatureChange(cIdx, fIdx, e.target.value)}
                          className="bg-neutral-950 border border-neutral-800 text-[11px] p-2 rounded text-neutral-300"
                        />
                      ))}
                      <button
                        onClick={() => addGolfFeature(cIdx)}
                        className="bg-neutral-950 border border-dashed border-neutral-800 hover:border-gold-500/40 text-[11px] p-2 rounded text-gold-500"
                      >
                        + 특징 추가
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Nightlife */}
          {activeTab === "night" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">나이트 라이프 기본 텍스트</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">헤드라인</label>
                    <input
                      type="text"
                      value={localContent.nightHeadline}
                      onChange={(e) => handleChange("nightHeadline", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-400 font-bold mb-1">서브카피</label>
                    <input
                      type="text"
                      value={localContent.nightSubcopy}
                      onChange={(e) => handleChange("nightSubcopy", e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-xs p-3 rounded text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {localContent.nightLifeItems.map((item, idx) => (
                  <div key={item.id} className="p-4 rounded bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white">나이트 코스 카드 {idx + 1}</span>
                      <span className="text-[10px] text-gold-400 font-mono font-bold uppercase">{item.englishTitle}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[9px] text-neutral-400">타이틀</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleNightChange(idx, "title", e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] text-neutral-400">영문 식별자</label>
                        <input
                          type="text"
                          value={item.englishTitle}
                          onChange={(e) => handleNightChange(idx, "englishTitle", e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] text-neutral-400">이미지 CDN 링크 (Unsplash)</label>
                      <input
                        type="text"
                        value={item.image}
                        onChange={(e) => handleNightChange(idx, "image", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-gold-300 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] text-neutral-400">간단 핵심 요약 (마우스 호버 / 모바일 클릭 시 노출)</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleNightChange(idx, "description", e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Reviews */}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-900">
                <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  리얼 고객 평가카드 관리 ({localContent.reviews.length}개 후기)
                </h3>
                <button
                  onClick={addReview}
                  className="flex items-center gap-1 bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 text-xs px-3 py-1.5 rounded border border-gold-500/30"
                >
                  <Plus className="w-3.5 h-3.5" /> 새 후기 등록
                </button>
              </div>

              <div className="space-y-4">
                {localContent.reviews.map((rev, rIdx) => (
                  <div key={rev.id} className="p-4 rounded bg-neutral-900 border border-neutral-800 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">후기 카드 {rIdx + 1}</span>
                      <button
                        onClick={() => deleteReview(rev.id)}
                        className="text-red-400 hover:text-red-500 p-1 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-[10px] text-neutral-400">글쓴이</label>
                        <input
                          type="text"
                          value={rev.author}
                          onChange={(e) => handleReviewChange(rIdx, "author", e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400">태그/카테고리</label>
                        <input
                          type="text"
                          value={rev.tag}
                          onChange={(e) => handleReviewChange(rIdx, "tag", e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400">등록일</label>
                        <input
                          type="text"
                          value={rev.date}
                          onChange={(e) => handleReviewChange(rIdx, "date", e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400">평가 별점 (1~5)</label>
                        <select
                          value={rev.rating}
                          onChange={(e) => handleReviewChange(rIdx, "rating", Number(e.target.value))}
                          className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white"
                        >
                          <option value={5}>⭐️⭐️⭐️⭐️⭐️ (5개)</option>
                          <option value={4}>⭐️⭐️⭐️⭐️ (4개)</option>
                          <option value={3}>⭐️⭐️⭐️ (3개)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400">후기 본문 내용</label>
                      <textarea
                        value={rev.text}
                        onChange={(e) => handleReviewChange(rIdx, "text", e.target.value)}
                        rows={2}
                        className="w-full bg-neutral-950 border border-neutral-850 p-2 text-xs rounded text-white outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-900/60 flex items-center justify-between">
          <span className="text-[11px] text-neutral-500 font-mono">
            * 변경사항은 즉시 로컬 메모리에 동적 저장됩니다.
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="bg-neutral-800 hover:bg-neutral-700 text-xs px-5 py-2.5 rounded font-bold text-white transition-all"
            >
              취소
            </button>
            <button
              onClick={handleSaveAll}
              className="gold-gradient hover:opacity-95 text-xs px-5 py-2.5 rounded font-bold text-black flex items-center gap-1.5 transition-all"
            >
              <Save className="w-4 h-4" /> 설정사항 즉시 저장 및 배포
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
