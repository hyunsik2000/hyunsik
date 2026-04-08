import React, { useState, useRef, useEffect } from "react";
import SlideUpSection from "../components/SlideUpSection";

const Activity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const activityData = [
    {
      type: "Current",
      title: "OZ Coding School",
      institution: "프로젝트 기술 지원 및 협업",
      period: "2026.04 - 현재",
      description: "부트캠프 수료 후 차기 심화 프로젝트 기술 지원 용병",
      skills: ["Technical Support", "Mentoring", "Collaboration"],
      isCurrent: true
    },
    {
      type: "Bootcamp",
      title: "OZ Coding School 부트캠프",
      institution: "웹 프론트엔드 부트캠프 15기",
      period: "2025.09 - 2026.03",
      description: "Next.js 심화와 Git Flow(Issue/PR/Review) 기반 실무 협업 프로세스를 내재화했습니다. SSR/CSR 최적화, SEO, 이미지·폰트 최적화 및 Tree Shaking 등 성능 개선을 통해 기술적 완성도를 높이는 경험을 학습 하였습니다. 프로젝트 FE 팀장으로서 프로젝트 과정 전반을 리딩했습니다.",
      skills: ["Next.js", "React", "TypeScript", "AWS", "Git Flow", "Performance"],
    },
    {
      type: "Bootcamp",
      title: "패스트캠퍼스",
      institution: "프론트엔드 개발 부트캠프",
      period: "2024.11 - 2025.01",
      description: "클론 코딩 미니 프로젝트 학습, 2D Canvas 및 Three.js 중급 과정 수료",
      skills: ["JavaScript", "Canvas", "Three.js"],
    },
    {
      type: "Club",
      title: "멋쟁이사자처럼 12기",
      institution: "금오공과대학교 - Frontend 팀장",
      period: "2024.03 - 2024.09",
      description: "React 스터디 리드 및 세미나 발표. Frontend 팀장 자격으로 전국 단위 서비스 해커톤 참여",
      skills: ["React", "JavaScript", "GitHub", "Figma"],
    },
  ];

  const educationData = [
    {
      type: "Certification",
      title: "토익 (TOEIC) - 725점",
      institution: "YBM",
      period: "2025.02",
    },
    {
      type: "Certification",
      title: "정보처리기사",
      institution: "한국산업인력공단",
      period: "2024.12",
    },
    {
      type: "Education",
      title: "금오공과대학교",
      institution: "컴퓨터공학과 학사",
      period: "2019.03 - 2025.08",
    },
  ];

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
        className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              활동 및 학업
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              다양한 경험을 통해 꾸준히 성장해온 과정입니다
            </p>
            <div
              className="mx-auto mt-4 h-1 bg-gray-300 dark:bg-slate-600 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            />
          </div>

          <div className="mb-24">
            <div className="flex items-center mb-12">
              <span className="text-md text-gray-900 dark:text-slate-100 uppercase mr-4">활동 경험</span>
              <div className="flex-grow h-px bg-gray-100 dark:bg-slate-800" />
            </div>

            <div className="space-y-16">
              {activityData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="md:w-32 pt-1 flex items-start gap-3">
                    <span className={`${item.isCurrent ? "text-blue-500 dark:text-blue-400" : "text-gray-300 dark:text-slate-700"} mt-1`}>✦</span>
                    <span className="text-sm font-bold text-gray-400 dark:text-slate-500 tabular-nums">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {item.institution}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 text-[10px] font-bold border border-gray-200 dark:border-slate-700 rounded text-gray-500 dark:text-slate-400">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl px-4 border-l-2 border-gray-100 dark:border-slate-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-12">
              <span className="text-md text-gray-900 dark:text-slate-100 uppercase mr-4">학력 및 자격</span>
              <div className="flex-grow h-px bg-gray-100 dark:bg-slate-800" />
            </div>

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 150 + 450}ms` }}
                >
                  <div className="md:w-32 pt-1 flex items-start gap-3">
                    <span className="text-gray-300 dark:text-slate-700 mt-1">✧</span>
                    <span className="text-sm font-bold text-gray-400 dark:text-slate-500 tabular-nums">
                      {item.period}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-2">
                      {item.institution}
                    </p>
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
