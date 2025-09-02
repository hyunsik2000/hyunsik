import React, { useState } from "react";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    const email = "rhsik2000@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      // 클립보드 API가 지원되지 않는 경우 대안
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <footer className="dark:border-slate-700 text-gray-600 dark:text-slate-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
              궁금한 점이 있으시다면
              <br />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                언제든 연락해 주세요!
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 my-8">
            {/* 전화번호 */}
            <button className="flex items-center text-gray-600 dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400 transition-colors group cursor-pointer">
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              010-7316-7616
            </button>

            {/* 이메일 */}
            <button
              onClick={copyEmail}
              className="flex items-center text-gray-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group cursor-pointer"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              rhsik2000@gmail.com
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/hyunsik2000"
              className="flex items-center text-gray-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              hyunsik2000
            </a>
          </div>
        </div>

        {/* Toast 알림 */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              복사되었습니다
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
