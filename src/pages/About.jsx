import React, { useState, useRef, useEffect } from "react";

// SlideUpSection 컴포넌트 모의
const SlideUpSection = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const capabilities = [
    {
      title: "React 기반 프론트엔드 개발",
      description:
        "컴포넌트 재사용성을 고려한 설계를 통해 반복 작업 시간을 크게 단축시켰습니다. 반복 회의를 통해 더 나은 구조를 지속적으로 고민합니다.",
      skills: ["React", "JavaScript", "CSS", "tailwindcss"],
      icon: "⚛️",
      gradient: "from-blue-500 to-purple-600",
      shadowColor: "shadow-blue-500/20",
      personality: "재사용성을 생각하는",
    },
    {
      title: "실시간 데이터 처리 및 API 연동",
      description:
        "카페 혼잡도를 실시간으로 받아와 사용자가 한눈에 파악할 수 있도록 색상과 그래픽으로 시각화했습니다. 복잡한 수치 데이터를 직관적인 UI로 변환하여 사용자가 빠른 의사결정을 할 수 있도록 도왔습니다.",
      skills: ["SocketJS", "REST API"],
      icon: "🔄",
      gradient: "from-green-500 to-teal-600",
      shadowColor: "shadow-green-500/20",
      personality: "정확성을 생각하는",
    },
    {
      title: "협업 도구 활용 및 프로젝트 관리",
      description:
        "팀원들이 이해하기 쉬운 커밋 메시지와 Notion 가이드 작성을 통해 소통문제 해결의 시간을 단축시켰습니다. Figma 디자인 시스템을 개발자간 공유하여 개발 과정에서의 혼선을 줄였습니다.",
      skills: ["Git", "GitHub", "Notion", "Figma"],
      icon: "🤝",
      gradient: "from-orange-500 to-red-600",
      shadowColor: "shadow-orange-500/20",
      personality: "소통을 좋아하는",
    },
    {
      title: "사용자 경험 개선 및 성능 최적화",
      description:
        "무한 스크롤 비디오 재생 플랫폼을 개발하며 사용자가 다음 영상을 기다리는 시간을 줄이기 위해 고민했습니다. 비디오 간 로딩 속도를 체감상 확실히 개선시켜 더 부드러운 시청 경험을 제공할 수 있었습니다.",
      skills: ["UX/UI", "Performance"],
      icon: "🎯",
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "shadow-purple-500/20",
      personality: "사용자 경험을 생각해보는",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SlideUpSection>
      <section ref={sectionRef} id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 간단한 헤더 */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                My Capabilities
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              다수의 협업을 통한 개발 경험을 통해{" "}
              <span className="font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                소통
              </span>
              과{" "}
              <span className="font-bold bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 bg-clip-text text-transparent">
                존중
              </span>
              을 중요시 여깁니다.
            </p>
          </div>

          {/* 카드 그리드 - 메인 포커스 */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 300}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 카드 배경 효과 - blur 제거 */}
                <div
                  className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                ></div>

                {/* 메인 카드 */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-slate-700 transform group-hover:-translate-y-4 group-hover:rotate-1 transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-2xl">
                  {/* 카드 상단 장식 바 */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent opacity-50"></div>
                  <div
                    className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${
                      capability.gradient
                    } transform transition-transform duration-700 ${
                      hoveredIndex === index ? "w-full" : "w-0"
                    }`}
                  ></div>

                  {/* 개성 표시 태그 */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`text-5xl transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-125 rotate-12" : ""
                      }`}
                    >
                      {capability.icon}
                    </div>
                  </div>

                  {/* 제목과 개성 설명 */}
                  <div className="mb-6">
                    <h3
                      className={`text-2xl lg:text-3xl font-black mb-3 transition-all duration-300 ${
                        hoveredIndex === index
                          ? `text-transparent bg-gradient-to-r ${capability.gradient} bg-clip-text`
                          : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {capability.title}
                    </h3>
                    <div
                      className={`text-sm font-semibold text-slate-500 dark:text-slate-400 transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {capability.personality} 개발자
                    </div>
                  </div>

                  {/* 설명 텍스트 */}
                  <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg leading-relaxed mb-8 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-200">
                    {capability.description}
                  </p>

                  {/* 스킬 태그들 - 심플한 디자인 */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {capability.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 카드 하단 장식 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-3xl">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        capability.gradient
                      } transform transition-transform duration-700 ${
                        hoveredIndex === index
                          ? "translate-x-0"
                          : "-translate-x-full"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideUpSection>
  );
};

export default About;
