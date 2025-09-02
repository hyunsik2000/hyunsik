import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const closeBtnRef = useRef(null);

  // 모달이 열릴 때 전체 페이지 스크롤 막기(+스크롤바 폭만큼 패딩 보정)
  useEffect(() => {
    if (!isOpen) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    // ESC 닫기
    const handleEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", handleEsc);

    // 초기 포커스
    queueMicrotask(() => closeBtnRef.current?.focus?.());

    return () => {
      document.body.style.overflow = prevOverflow || "unset";
      document.body.style.paddingRight = prevPaddingRight || "0px";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // ⚠️ fixed 요소가 상위의 transform/필터 등에 영향을 받지 않도록 body로 포털 렌더
  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="프로젝트 상세"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-md max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen
            ? "modalSlideIn 0.3s ease-out"
            : "modalSlideOut 0.3s ease-in",
        }}
      >
        {/* 모달 헤더 */}
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 rounded-t-3xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {project.subtitle}
              </p>
            </div>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="닫기"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 flex items-center justify-center transition-all duration-200 text-xl font-light hover:rotate-90 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* 모달 컨텐츠 */}
        <div className="p-8 space-y-8">
          {/* 프로젝트 설명 */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              프로젝트 개요
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-line">
              {project.detail}
            </p>
          </div>

          {/* 역할 */}
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

          {/* 주요 기능 */}
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

          {/* 기술 스택 */}
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

          {/* 프로젝트 하이라이트 */}
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

          {/* GitHub 링크 */}
          {project.githubUrl && (
            <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
              <button
                onClick={() =>
                  window.open(
                    project.githubUrl,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full bg-gray-900 dark:bg-slate-700 text-white py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-slate-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>GitHub에서 코드 보기</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Vite에서도 동작하는 일반 <style> (styled-jsx 아님) */}
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
