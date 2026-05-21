import { AppContent } from "./types";

export const defaultAppContent: AppContent = {
  heroHeadline: "DANANG VIP CLUB",
  heroSubcopy: "골프 · 5성급 호텔 · VIP 카지노 · 리무진 서비스",
  heroBadge: "프리미엄 다낭 멤버십",
  kakaoLink: "https://pf.kakao.com/_xeExbxlG", // Placeholder or editable
  telegramLink: "https://t.me/danang_vip_club", // Placeholder or editable
  counselText: "24시간 한국어 실시간 상담 가능",
  
  golfHeadline: "다낭 최고의 골프 코스를 VIP 서비스와 함께",
  golfSubcopy: "완벽히 관리된 그린에서 펼쳐지는 럭셔리 라운딩",
  
  nightHeadline: "다낭의 밤을 가장 프리미엄하게",
  nightSubcopy: "오직 VIP만을 위한 최상급 야경과 프라이빗 엔터테인먼트",
  
  casinoMainName: "Hoiana Resort & Golf (호이안 제나 카지노 연계)",
  casinoHeadline: "VIP 카지노 멤버십 안내",
  casinoSubcopy: "프라이빗 서비스 및 차별화된 롤링 혜택 제공",

  vipBenefits: [
    {
      id: "benefit_1",
      title: "왕복 항공권 지원",
      description: "조건 충족 시 비즈니스/이코노미 클래스 왕복 항공 예약 지원",
      iconName: "Plane"
    },
    {
      id: "benefit_2",
      title: "5성급 호텔 제공",
      description: "인터컨티넨탈, 호이안 리조트 등 최고급 호텔 앤 리조트 무료 숙박 제공",
      iconName: "Hotel"
    },
    {
      id: "benefit_3",
      title: "리무진 픽업 & 드랍",
      description: "전용 기사가 포함된 최고급 카니발/솔라티 VIP 리무진 24시간 대기 상시 에스코트",
      iconName: "Car"
    },
    {
      id: "benefit_4",
      title: "공항 VIP 패스트트랙",
      description: "입국 및 출국 시 복잡한 대기 없이 공항 전담 요원 동행 및 초고속 패스",
      iconName: "ShieldCheck"
    },
    {
      id: "benefit_5",
      title: "카지노 롤링 혜택",
      description: "다낭 최고 요율의 롤링 커미션 혜택 및 프라이빗 VIP 정켓 룸 지원",
      iconName: "Coins"
    },
    {
      id: "benefit_6",
      title: "골프 예약 지원",
      description: "다낭 명문 3대 골프 코스 티타임 우선 확보 및 원스톱 스케줄 케어",
      iconName: "Trophy"
    }
  ],

  golfClubs: [
    {
      id: "golf_1",
      name: "바나힐 골프 클럽",
      englishName: "Ba Na Hills Golf Club",
      description: "야간 라이트 플레이가 가능한 다낭 필수 코스. 산악 지형의 기하학적인 레이아웃과 수려한 경관을 자랑하는 명문 구장입니다.",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
      location: "다낭 바나힐 국립공원 기슭 위치",
      features: ["18홀 / 파 72", "Luke Donald 설계", "24시간 전 홀 라이트 시설"]
    },
    {
      id: "golf_2",
      name: "BRG 다낭 골프 리조트",
      englishName: "BRG Da Nang Golf Resort",
      description: "세계적인 거장 그렉 노먼과 잭 니클라우스의 코스가 공존하는 곳. 끝없이 펼쳐진 바다를 등지고 플레이하는 환상적인 마블 코스입니다.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      location: "다낭 미케비치 남단 해변가 위치",
      features: ["36홀 / 링스 & 듄스 코스", "Greg Norman, Jack Nicklaus 설계"]
    },
    {
      id: "golf_3",
      name: "몽고메리 링크스",
      englishName: "Montgomerie Links",
      description: "모래 언덕과 소나무 숲이 어우러진 정통 링스 스타일 코스. 콜린 몽고메리가 설계하여 탁월한 조형미와 정교한 홀 구성이 압도적입니다.",
      image: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=800&q=80",
      location: "다낭-호이안 경계 해안가 위치",
      features: ["18홀 / 파 72", "Colin Montgomerie 설계", "뛰어난 배수 최상의 그린 상태"]
    }
  ],

  nightLifeItems: [
    {
      id: "night_1",
      title: "럭셔리 루프탑 바",
      englishTitle: "Rooftop Bar",
      description: "다낭 한강과 노보텔 시티뷰가 한눈에 들어오는 최고층 클럽 & 라운지바 케어.",
      image: "https://images.unsplash.com/photo-1570872626485-d8ffea697003?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "night_2",
      title: "VIP 골드 라운지",
      englishTitle: "Lounge",
      description: "고급 주류와 아늑한 인테리어로 채워진 프라이빗 골드 라운지 에스코트.",
      image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "night_3",
      title: "프라이빗 가라오케 룸",
      englishTitle: "Private Room",
      description: "최신식 음향 설비와 완벽한 방음, 품위 있는 모임을 보장하는 에어컨 완비 대형 룸.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "night_4",
      title: "최고급 사우나 & 마사지",
      englishTitle: "Spa & Massage",
      description: "장거리 비행과 라운딩 후 피로를 날려버릴 VIP 독채 스파 및 릴렉스 테라피.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "night_5",
      title: "나이트 투어 & 클럽",
      englishTitle: "Night Tour & Club",
      description: "뜨거운 다낭의 열기를 직접 느낄 수 있는 메인 클럽 테이블 및 가이드 풀케어.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "night_6",
      title: "라이브 재즈 바 에스코트",
      englishTitle: "Live Music Club",
      description: "감성적인 어쿠스틱 멜로디와 이국적인 하이브리드 음악이 흐르는 숨은 아지트 연계.",
      image: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?auto=format&fit=crop&w=600&q=80"
    }
  ],

  casinoBenefits: [
    {
      id: "casino_b1",
      title: "5성급 최고급 호텔 즉시 연계",
      description: "호이안 호이아나 리조트앤골프 5성급 이상 스위트룸 즉시 배치 및 최상의 서비스 연계"
    },
    {
      id: "casino_b2",
      title: "무상 VIP 의전 차량 서비스",
      description: "호텔 도착부터 게임, 외부 라운딩까지 전 일정 VIP 리무진 차량 무상 지원"
    },
    {
      id: "casino_b3",
      title: "공항 패스트트랙 및 밀착 가이드",
      description: "공항 도착 직후 VIP 전용 터미널 에스코트 서비스 및 24시간 한국어 가이드 매니저 상시 수행"
    },
    {
      id: "casino_b4",
      title: "초고율 롤링 혜택 및 프라이빗 룸",
      description: "업계 최고 요율의 롤링 및 콤프 혜택, 완벽하게 분리된 고급 정켓 룸 프라이빗 바 테이블 세팅"
    }
  ],

  reviews: [
    {
      id: "rev_1",
      rating: 5,
      text: "공항 도착하자마자 리무진으로 VIP 픽업해주셔서 정말 편했습니다. 5성급 숙실도 최고 수준이고 가이드 실장님이 정말 친절하게 24시간 맞춰주셨어요.",
      author: "김*성 (법인 대표)",
      date: "2026.04",
      tag: "카지노 앤 리조트 이용"
    },
    {
      id: "rev_2",
      rating: 5,
      text: "바나힐이랑 BRG 다낭 골프 예약도 힘든 황금 시간에 예약 다 잡아 주시더군요. 다낭 여행 중 단연 가장 만족스럽고 프라이빗한 비즈니스 접대였습니다.",
      author: "이*수 (IT기업 이사)",
      date: "2026.05",
      tag: "골프 프리미엄 패키지"
    },
    {
      id: "rev_3",
      rating: 5,
      text: "유튜브나 카더라랑은 전혀 다르네요. 공항 입국부터 패스트트랙으로 5분 만에 패스하고 호이아나 리조트까지 다이렉트 에스코트 받았습니다. 카지노 롤링 혜택 꼼꼼하게 다 정산해주셔서 감동했습니다.",
      author: "정*우 (개인 투자자)",
      date: "2026.05",
      tag: "VIP 올케어 카지노"
    }
  ]
};
