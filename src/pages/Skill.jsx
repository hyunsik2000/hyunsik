import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faFigma,
  faGithub,
  faAws,
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

  const TypeScriptIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="8" fill="#3178C6" />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fill="white"
        fontSize="38"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        TS
      </text>
    </svg>
  );

  const NextIcon = ({ className }) => (
    <svg viewBox="0 0 180 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        fill="white"
        className="dark:fill-slate-900"
        d="M149.508 157.52L69.142 54H54V125.97H66.1192V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
      />
      <rect x="115" y="54" width="12" height="72" fill="white" className="dark:fill-slate-900" />
    </svg>
  );

  const frontendSkills = [
    {
      name: "JavaScript",
      icon: faJs,
      iconColor: "text-yellow-500 dark:text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      iconColor: "",
      isSvg: true,
    },
    {
      name: "React",
      icon: faReact,
      iconColor: "text-cyan-500 dark:text-cyan-400",
    },
    {
      name: "Next.js",
      icon: NextIcon,
      iconColor: "text-slate-900 dark:text-slate-100",
      isSvg: true,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      iconColor: "text-teal-500 dark:text-teal-400",
      isSvg: true,
    },
    {
      name: "AWS",
      icon: faAws,
      iconColor: "text-orange-500 dark:text-orange-400",
    },
    {
      name: "GitHub",
      icon: faGithub,
      iconColor: "text-gray-800 dark:text-slate-200",
    },
    {
      name: "Figma",
      icon: faFigma,
      iconColor: "text-purple-500 dark:text-purple-400",
    },
  ];

  const additionalExperience = [
    "Zustand 기반 전역 상태 관리",
    "GitHub Actions + CodeDeploy CI/CD 파이프라인 구축",
    "JWT 인증 및 httpOnly 쿠키 기반 인증 설계",
    "반응형 웹 구현",
    "외부 API 연동 (Naver Map, Kakao Login)",
    "SocketJS 기반 실시간 통신",
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
            <div
              className="mx-auto mt-4 h-1 bg-gray-300 dark:bg-slate-600 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            ></div>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl p-2 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
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
                </div>
              ))}
            </div>
          </div>

          <div
            className={`bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 transition-all ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
                또 이런 경험도 있어요
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm mt-4">
                프로젝트를 통해 직접 적용해본 기술들
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                {additionalExperience.map((exp, index) => (
                  <div
                    key={index}
                    className={`group flex items-center p-4 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all cursor-default transform hover:-translate-y-1 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    onMouseEnter={() => setHoveredExp(index)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    <div
                      className={`w-3 h-3 rounded-full mr-4 transition-all duration-300 ${
                        hoveredExp === index
                          ? "bg-slate-700 dark:bg-slate-300 scale-125"
                          : "bg-gray-400 dark:bg-slate-600"
                      }`}
                    ></div>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        hoveredExp === index
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-600 dark:text-slate-300"
                      }`}
                    >
                      {exp}
                    </span>
                  </div>
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
