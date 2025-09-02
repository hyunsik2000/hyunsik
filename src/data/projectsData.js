export const projectsData = [
  {
    id: 1,
    title: "CaféFlow",
    subtitle: "실시간 카페 좌석 확인 서비스",
    description:
      "실시간 현재 위치 기반의 카페 별 좌석의 이용 현황 정보를 전달하는 서비스",
    detail:
      "현재 위치 기준으로 주변 카페의 좌석 혼잡도를 지도/목록에서 즉시 확인하도록 설계하고, 새로고침 없이 실시간 반영되도록 구현했습니다. 사용자는 지도에서 후보를 좁히고, 1:1 채팅·게시판으로 현장 정보를 보완해 더 빠르게 카페를 선택할 수 있습니다.",
    role: "조장 & Frontend Developer",
    keyFeatures: [
      "Naver Map API로 매장 마커/정보창 UI 구현",
      "SocketJS를 통한 혼잡도 실시간 구독(페이지 리로드 없이 갱신)",
      "Context API 기반 사용자 상태 전역 관리(인증정보)",
      "Axios 인터셉터로 공통 에러/재시도 처리",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Naver API",
      "SocketJS",
      "Axios",
      "Context API",
    ],
    highlights: [
      "지도 한 화면에서 좌석 현황·매장 정보를 연속적으로 탐색",
      "실시간 혼잡도 갱신으로 후보 비교/결정 흐름이 끊기지 않음",
      "1대1 채팅·게시판으로 서비스 보완",
    ],
    borderColor: "border-blue-200 dark:border-blue-800",
    githubUrl: "https://github.com/hyunsik2000/CafeFlow-FrontEnd",
  },
  {
    id: 2,
    title: "Fizz!",
    subtitle: "Wellness Challenge 커뮤니티",
    description:
      "Wellness한 작은 활동을 short-form 형태로 승화시킨 웰니스 챌린지 커뮤니티",
    detail:
      "숏폼 콘텐츠를 끊김 없이 소비·생성할 수 있도록 스트리밍(시청), 무한 스크롤(탐색), 업로드(생성) 흐름을 연결했습니다. hls.js로 재생 안정성을 확보하고, Intersection Observer로 화면 밖 콘텐츠를 즉시 언마운트해 메모리 사용을 관리했습니다.",
    role: "Frontend 팀장",
    keyFeatures: [
      "hls.js 스트리밍 파이프라인 구성",
      "숏폼 연속 스크롤 UI(상세 보기 진입/복귀 상태 보존)",
      "동영상 업로드(진행률 표시)·S3 저장·SSE로 처리 상태 알림",
      "Intersection Observer로 뷰포트 밖 리소스 언마운트",
    ],
    techStack: [
      "React",
      "JavaScript",
      "hls.js",
      "AWS S3",
      "SSE",
      "Intersection Observer API",
    ],
    highlights: [
      "연속 스크롤 환경에서 영상 전환 지연 감축(버벅임 체감 최소화)",
      "업로드 진행률·처리 상태를 실시간 노출해 사용자 불확실성 감소",
      "리스트 가상화/언마운트로 메모리 사용량 급증 억제",
    ],
    borderColor: "border-green-200 dark:border-green-800",
    githubUrl: "https://github.com/Fizz-challenge/Fizz_front",
  },
  {
    id: 3,
    title: "hyunsik",
    subtitle: "개인 포트폴리오",
    description:
      "React와 Tailwind CSS를 활용하여 개발한 개인 포트폴리오 웹사이트입니다.",
    detail: "개인 포트폴리오입니다.",
    role: "Frontend Developer",
    keyFeatures: [
      "React 컴포넌트 기반 설계(프로젝트/상세 모달/레이아웃 모듈화)",
      "Tailwind CSS 유틸리티로 일관된 디자인 시스템 구성",
      "반응형 레이아웃 및 다크모드 지원",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
    highlights: ["다크/라이트 테마 지원으로 다양한 환경에서 가독성 유지"],
    borderColor: "border-purple-200 dark:border-purple-800",
    githubUrl: "https://github.com/hyunsik2000/hyunsik",
  },
];
