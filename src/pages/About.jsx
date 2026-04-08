import React, { useState, useRef, useEffect } from "react";
import SlideUpSection from "../components/SlideUpSection";
import { NextJsVisual, InfraVisual, CollabVisual } from "../components/AboutVisuals";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const capabilities = [
    {
      title: "Next.js & 렌더링 전략",
      description:
        "프로젝트 데이터 성격에 맞춰 SSR 전략을 배치하여 성능과 신선도의 균형을 맞췄습니다. 인증 토큰을 Next Server의 Cookie 저장소로 관리하는 보안 전략을 도입하여 서비스의 보안성과 안정성을 강화한 경험이 있습니다.",
      skills: ["SSR/ISR", "Next Cookie", "Security"],
      Visual: NextJsVisual,
      gradientColor: "from-blue-600 to-indigo-600",
    },
    {
      title: "Cloud Infra & CI/CD",
      description:
        "AWS S3/EC2와 Vercel을 연동한 자동화 파이프라인을 구축하여 서비스의 전체 생애 주기를 경험했습니다. 인프라의 안정성이 곧 서비스의 신뢰도라는 생각으로 운영 환경을 고민해 보았습니다.",
      skills: ["AWS", "Vercel", "Automation"],
      Visual: InfraVisual,
      gradientColor: "from-teal-500 to-emerald-600",
    },
    {
      title: "Collaboration & Communication",
      description:
        "Git Flow와 문서화를 통해 팀원들과 지식을 공유하고 협업의 효율을 높이는 과정에 보람을 느깁니다. 원활한 소통을 통해 공동의 목표를 팀과 함께 달성하는 것을 지향합니다.",
      skills: ["Git Flow", "Notion", "Figma"],
      Visual: CollabVisual,
      gradientColor: "from-orange-500 to-amber-600",
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
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              핵심 역량
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              유연하게 소통하고 견고하게 개발합니다.
            </p>
            <div
              className="mx-auto mt-4 h-1 bg-gray-300 dark:bg-slate-600 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            ></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`group flex flex-col transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl bg-gray-50 dark:bg-slate-900 shadow-md transform transition-transform duration-500 group-hover:-translate-y-2">
                  <capability.Visual />
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${capability.gradientColor} transition-all duration-500 group-hover:w-full`} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {capability.title}
                </h3>

                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {capability.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {capability.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs font-semibold text-slate-400 dark:text-slate-500"
                    >
                      #{skill}
                    </span>
                  ))}
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
