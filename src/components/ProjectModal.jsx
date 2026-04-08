import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    const handleEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", handleEsc);

    queueMicrotask(() => closeBtnRef.current?.focus?.());

    return () => {
      document.body.style.overflow = prevOverflow || "unset";
      document.body.style.paddingRight = prevPaddingRight || "0px";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="프로젝트 상세"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-md max-w-4xl w-full max-h-[85vh] overflow-y-auto transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen
            ? "modalSlideIn 0.3s ease-out"
            : "modalSlideOut 0.3s ease-in",
        }}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 rounded-t-3xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {project.subtitle}
              </p>
              {project.period && (
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
                  {project.period}
                </p>
              )}
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="닫기"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 flex items-center justify-center transition-all duration-200 text-xl font-light hover:rotate-90 focus:outline-none cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              프로젝트 개요
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-line">
              {project.detail}
            </p>
          </div>

          {project.role && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                담당 역할
              </h4>
              <div className="inline-block px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-semibold text-lg">
                {project.role}
              </div>
            </div>
          )}

          {project.keyFeatures?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-6 flex items-center">
                <div className="w-1 h-6 bg-purple-500 rounded-full mr-3"></div>
                주요 구현 기능
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200 group"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 dark:text-slate-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.techStack?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-6 flex items-center">
                <div className="w-1 h-6 bg-orange-500 rounded-full mr-3"></div>
                사용 기술
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.highlights?.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-6 flex items-center">
                <div className="w-1 h-6 bg-yellow-500 rounded-full mr-3"></div>
                프로젝트 하이라이트
              </h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300 text-lg">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.githubUrl || project.webUrl) && (
            <div className="pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
              {project.webUrl && (
                <button
                  onClick={() =>
                    window.open(project.webUrl, "_blank", "noopener,noreferrer")
                  }
                  className="flex-1 bg-blue-600 dark:bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <Globe className="w-5 h-5" />
                  <span>Web</span>
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={() =>
                    window.open(
                      project.githubUrl,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex-1 bg-gray-900 dark:bg-slate-700 text-white py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-slate-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  <span>Github</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes modalSlideOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.96) translateY(12px); }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ProjectModal;
