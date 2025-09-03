import React, { useState, useRef, useEffect } from "react";
import SlideUpSection from "../components/SlideUpSection";

const Activity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const [hoveredEdu, setHoveredEdu] = useState(null);
  const sectionRef = useRef(null);

  // 학업 관련 데이터
  const educationData = [
    {
      type: "education",
      icon: "🎓",
      title: "컴퓨터공학과 학사",
      institution: "금오공과대학교",
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
        "React 스터디 리드 및 세미나 발표. 팀 프로젝트 UI/UX 설계·컴포넌트 구조 기획, GitHub 협업 프로세스 정립",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      type: "bootcamp",
      icon: "💻",
      title: "패스트캠퍼스 교육",
      institution: "부트 캠프 - 개인",
      period: "2024.11 - 2025.01",
      description:
        "클론 코딩 미니 프로젝트로 웹 개발 전체 프로세스 학습, 2D Canvas·Three.js 중급 과정",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  // 섹션이 뷰포트에 들어오면 isVisible=true로 전환
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SlideUpSection>
      <section
        ref={sectionRef}
        id="activity"
        className="py-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* 섹션 헤더 */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              활동 사항
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              학업 과정과 다양한 활동들을 통해 쌓아온 경험들입니다
            </p>
            <div
              className="mx-auto mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            />
          </div>

          {/* 활동 섹션 (동아리/부트캠프) */}
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {activityData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredActivity(index)}
                  onMouseLeave={() => setHoveredActivity(null)}
                >
                  {/* 카드 배경 그라데이션 글로우 */}
                  <div
                    className={`pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`}
                  />

                  {/* 메인 카드 */}
                  <div className="relative p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                    {/* 상단 얇은 라인 + 호버 시 진행 바 */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent opacity-50" />
                    <div
                      className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${
                        item.gradient
                      } transform transition-[width] duration-700 ${
                        hoveredActivity === index ? "w-full" : "w-0"
                      }`}
                    />

                    {/* 아이콘과 타입 */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`mr-4 flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${
                          item.gradient
                        } transition-transform duration-500 ${
                          hoveredActivity === index ? "scale-110 rotate-6" : ""
                        }`}
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
                    <div className="flex items-center mb-3 text-gray-500 dark:text-gray-400">
                      <span className="mr-2">📅</span>
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    {/* 하단 러너 바 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-xl">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          item.gradient
                        } transform transition-transform duration-700 ${
                          hoveredActivity === index
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }`}
                      />
                    </div>
                  </div>
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
                  className={`group relative transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                  onMouseEnter={() => setHoveredEdu(index)}
                  onMouseLeave={() => setHoveredEdu(null)}
                >
                  {/* 카드 배경 그라데이션 글로우 */}
                  <div
                    className={`pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`}
                  />

                  {/* 메인 카드 */}
                  <div className="relative p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                    {/* 상단 라인 + 진행 바 */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent opacity-50" />
                    <div
                      className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${
                        item.gradient
                      } transform transition-[width] duration-700 ${
                        hoveredEdu === index ? "w-full" : "w-0"
                      }`}
                    />

                    {/* 아이콘과 타입 */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`mr-4 flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${
                          item.gradient
                        } transition-transform duration-500 ${
                          hoveredEdu === index ? "scale-110 rotate-6" : ""
                        }`}
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
                    <div className="flex items-center mb-3 text-gray-500 dark:text-gray-400">
                      <span className="mr-2">📅</span>
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    {/* 하단 러너 바 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-xl">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          item.gradient
                        } transform transition-transform duration-700 ${
                          hoveredEdu === index
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }`}
                      />
                    </div>
                  </div>
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
