import React, { useState, useEffect, useRef } from "react";
import SlideUpSection from "../components/SlideUpSection";
import ProjectModal from "../components/ProjectModal";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 모달 열릴 때 body 스크롤 제어 제거 (모달에서 처리)
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <SlideUpSection>
      <section
        ref={sectionRef}
        id="project"
        className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 섹션 */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              진행한 주요 프로젝트들을 소개합니다
            </p>
            {/* 언더라인 애니메이션 */}
            <div
              className="mx-auto mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            ></div>
          </div>

          {/* 프로젝트 카드 그리드 */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* 카드 글로우 효과 */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>

                {/* 메인 카드 - 고정 높이 */}
                <div
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border ${project.borderColor} hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-300 h-80 flex flex-col`}
                >
                  {/* 카드 헤더 */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* 서브타이틀 */}
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* 설명 - flex-grow로 남은 공간 채우기 */}
                  <div className="flex-grow flex flex-col">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow overflow-hidden">
                      {project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                    </p>

                    {/* 주요 기술 (최대 3개) */}
                    <div className="flex-shrink-0 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2.5 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2.5 py-1 bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-slate-400 rounded-md text-xs font-medium">
                            +{project.techStack.length - 3}개
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 카드 하단 - 더보기 표시 */}
                    <div className="flex-shrink-0 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        자세히 보기
                      </span>
                      <div className="text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 프로젝트 상세 모달 */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </section>
    </SlideUpSection>
  );
};

export default Projects;
