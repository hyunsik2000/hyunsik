import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SlideUpSection from "../components/SlideUpSection";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredExp, setHoveredExp] = useState(null);
  const sectionRef = useRef(null);
  const TailwindIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
    >
      <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" />
    </svg>
  );

  const frontendSkills = [
    {
      name: "HTML5",
      icon: faHtml5,
      color:
        "bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-800/30",
      iconColor: "text-orange-500 dark:text-orange-400",
    },
    {
      name: "CSS3",
      icon: faCss3Alt,
      color:
        "bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-800/30",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "JavaScript",
      icon: faJs,
      color:
        "bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:hover:bg-yellow-800/30",
      iconColor: "text-yellow-500 dark:text-yellow-400",
    },
    {
      name: "React",
      icon: faReact,
      color:
        "bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/20 dark:hover:bg-cyan-800/30",
      iconColor: "text-cyan-500 dark:text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      color:
        "bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/20 dark:hover:bg-teal-800/30",
      iconColor: "text-teal-500 dark:text-teal-400",
      isSvg: true,
    },
    {
      name: "GitHub",
      icon: faGithub,
      color:
        "bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-800/30",
      iconColor: "text-black dark:text-white",
    },
    {
      name: "Figma",
      icon: faFigma,
      color:
        "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/20 dark:hover:bg-purple-800/30",
      iconColor: "text-purple-500 dark:text-purple-400",
    },
  ];

  const additionalExperience = [
    "Next.js 현재 학습중",
    "Vercel 활용 프로젝트 배포",
    "JWT 토큰을 활용한 로그인/회원가입",
    "반응형 웹 디자인 구현",
    "외부 API 사용 (Naver Map, Kakao Map)",
    "SocketJs 기반 실시간 통신 환경 제공",
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
      <section ref={sectionRef} id="skill" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              기술 스택
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              현재 사용할 수 있는 기술들입니다.
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl p-2 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-lg ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {skill.isSvg ? (
                        <skill.icon
                          className={`w-10 h-10 mx-auto ${skill.iconColor}`}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className={`w-10 h-10 mx-auto ${skill.iconColor}`}
                        />
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-slate-100 mt-3">
                      {skill.name}
                    </h4>
                  </div>

                  {/* 호버시 나타나는 미세한 글로우 효과 */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-current to-transparent blur-xl -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div
            className={`bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-800 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2 relative inline-block">
                또 이런 경험도 있어요
                {/* 제목 아래 작은 장식 */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm mt-4">
                지속적으로 학습하고 도전하고 있는 기술들
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                {additionalExperience.map((exp, index) => (
                  <div
                    key={index}
                    className={`group flex items-center p-4 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:shadow-lg ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${(index + 7) * 100}ms` }}
                    onMouseEnter={() => setHoveredExp(index)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    {/* 아이콘 도트 */}
                    <div
                      className={`w-3 h-3 rounded-full mr-4 transition-all duration-300 ${
                        hoveredExp === index
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                          : "bg-gray-400 dark:bg-slate-600"
                      }`}
                    ></div>

                    {/* 경험 텍스트 */}
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        hoveredExp === index
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-600 dark:text-slate-300"
                      }`}
                    >
                      {exp}
                    </span>

                    {/* 호버시 나타나는 화살표 */}
                    <div
                      className={`ml-auto transition-all duration-300 transform ${
                        hoveredExp === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      <div className="text-blue-500 text-sm">→</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 장식 */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${2000 + i * 100}ms`,
                      animation: isVisible
                        ? `pulse 2s infinite ${i * 0.2}s`
                        : "none",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SlideUpSection>
  );
};

export default Skills;
