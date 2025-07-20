import React, { useEffect } from 'react';
import { darkToggle, initialTheme } from '../utils/darkUtils';

const Header = () => {

  useEffect(() => {
    initialTheme();
  }, []);
  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
      });
    }
  };

  // 탭 데이터
  const tabs = [
    { name: '기술', id: 'skill' },
    { name: '프로젝트', id: 'project' },
    { name: '활동사항', id: 'activity' }
  ];

  return (
    <div className="sticky top-0 z-40 bg-white dark:bg-slate-900  border-gray-200 dark:border-slate-700 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          {/* 네비게이션 탭 */}
          <nav className="flex space-x-1 bg-gray-100 dark:bg-slate-700 rounded-full p-1">
                        <button
              onClick={() => scrollToSection('about')}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              <img 
                src="/assets/img/My_Icon.webp" 
                alt="Logo" 
                className="w-6 h-6 rounded-full"
              />
            </button>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => scrollToSection(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors  bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
            <button
              onClick={darkToggle}
              className="relative inline-flex items-center px-2 rounded-full transition-colors bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 hover:text-gray-900 dark:hover:text-white"
              title="테마 전환"
            >
              <div className="relative w-5 h-5">
                {/* 다크 모드 아이콘 (달) - 라이트 모드일 때 보임 */}
                <svg 
                  className="w-5 h-5 dark:hidden" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
                
                {/* 라이트 모드 아이콘 (태양) - 다크 모드일 때 보임 */}
                <svg 
                  className="w-5 h-5 hidden dark:block" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;