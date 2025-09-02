import React from "react";
import SlideUpSection from "../components/SlideUpSection";

const Activity = () => {
  // 학업 관련 데이터
  const educationData = [
    {
      type: "education",
      icon: "🎓",
      title: "컴퓨터공학과 학사",
      institution: "금오공과대학교 - 졸업 예정",
      period: "2019.03 - 2025.08",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      type: "certification",
      icon: "🏆",
      title: "정보처리기사",
      institution: "한국산업인력공단",
      period: "2024.12 취득",
      gradient: "from-orange-500 to-red-600",
    },
    {
      type: "certification",
      icon: "🗣️",
      title: "토익 (TOEIC) - 725점",
      institution: "YBM",
      period: "2025.02 응시",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  // 활동 관련 데이터
  const activityData = [
    {
      type: "club",
      icon: "🦁",
      title: "멋쟁이사자처럼 12기",
      institution: "동아리 활동 - Frontend 팀장",
      period: "2024.03 - 2024.09",
      description:
        "프론트엔드 그룹 스터디 및 발표를 통해 React 지식 공유, 팀장 역할로 프로젝트를 진행하며 UI/UX 설계 및 컴포넌트 구조 기획, GitHub 협업",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      type: "bootcamp",
      icon: "💻",
      title: "패스트캠퍼스 교육",
      institution: "부트 캠프 - 개인",
      period: "2024.11 - 2025.01",
      description:
        "클론 코딩 미니 프로젝트로 웹 개발 전체 프로세스를 학습, 2D Canvas, Three.js 중급 과정 공부",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <SlideUpSection>
      <section
        id="activity"
        className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              활동 사항
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              학업 과정과 다양한 활동들을 통해 쌓아온 경험들입니다
            </p>
          </div>

          {/* 활동 섹션 */}
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {activityData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-70"
                >
                  {/* 아이콘과 타입 */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} mr-4 flex items-center justify-center`}
                    >
                      <span className="text-white text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {item.type === "club" ? "동아리" : "부트캠프"}
                    </span>
                  </div>

                  {/* 내용 */}
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                    {item.institution}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="mr-2 text-gray-500 dark:text-gray-400">
                      📅
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 학업 섹션 */}
          <div className="my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  {/* 아이콘과 타입 */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} mr-4 flex items-center justify-center`}
                    >
                      <span className="text-white text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {item.type === "education" ? "학업" : "자격증"}
                    </span>
                  </div>

                  {/* 내용 */}
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                    {item.institution}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="mr-2 text-gray-500 dark:text-gray-400">
                      📅
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SlideUpSection>
  );
};

export default Activity;
