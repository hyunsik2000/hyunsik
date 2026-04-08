import React, { useState, useEffect, useRef } from "react";
import SlideUpSection from "../components/SlideUpSection";
import ProjectModal from "../components/ProjectModal";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      <section ref={sectionRef} id="project" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              프로젝트
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              진행한 주요 프로젝트들을 소개합니다
            </p>
            <div
              className="mx-auto mt-4 h-1 bg-gray-300 dark:bg-slate-600 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "80px" : "0px" }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`group relative cursor-pointer transform transition-all duration-700 hover:-translate-y-2 h-full ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <div
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border ${project.borderColor} transition-all duration-300 h-full flex flex-col overflow-hidden`}
                >
                  <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${project.gradientColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-2xl`} />
                  <div className="flex-shrink-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {project.role}
                        </p>
                        {project.period && (
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                            {project.period}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex-grow flex flex-col">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow overflow-hidden">
                      {project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                    </p>

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
