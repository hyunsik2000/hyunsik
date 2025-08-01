import SlideUpSection from "../components/SlideUpSection";
import { downloadResume } from '../utils/downloadResume';

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };

  // 이력서 다운로드 핸들러
  const handleDownloadResume = () => {
    const success = downloadResume();
    if (!success) {
      alert('이력서 다운로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <SlideUpSection>
      <div id="home">
        <section className="py-20 sm:py-20 bg-white dark:bg-slate-900 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto sm:px-8 lg:px-8 w-full">
            <div className="text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex space-x-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/30 dark:shadow-violet-400/20">
                    <span className="text-white font-bold text-lg sm:text-xl">L</span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/20">
                    <span className="text-white font-bold text-lg sm:text-xl">H</span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 dark:shadow-amber-400/20">
                    <span className="text-white font-bold text-lg sm:text-xl">S</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2 sm:mb-4">
                안녕하세요,
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2 sm:mb-4">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">프론트엔드 신입 개발자</span>
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  류현식
                </span>
                <span className="text-gray-900 dark:text-slate-100">입니다</span>
              </h1>
              
              <div className='flex justify-center mb-6 sm:mb-8'>
                <img 
                  src="/assets/img/My_Icon.webp" 
                  alt="Logo" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
                />
              </div>
              
              {/* 다운로드 버튼 */}
              <button 
                onClick={handleDownloadResume} 
                className="mb-8 sm:mb-20 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 dark:from-violet-400 dark:to-purple-500 dark:hover:from-violet-500 dark:hover:to-purple-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl transition-all duration-300 inline-flex items-center shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 text-sm sm:text-base"
              >
                <span className="mr-2">이력서 다운로드</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 스크롤 다운 화살표 - absolute 제거하고 margin으로 처리 */}
          <div className="mt-auto mb-6 sm:mb-8">
            <button 
              onClick={scrollToNext}
              className="group flex flex-col items-center cursor-pointer animate-bounce"
            >
              <span className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                Scroll Down
              </span>
              <div className="flex flex-col space-y-1">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-slate-500 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
        </section>
      </div>
    </SlideUpSection>
  );
};

export default Home;