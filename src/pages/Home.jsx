import SlideUpSection from "../components/SlideUpSection";
import { downloadResume } from "../utils/downloadResume";

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };

  const handleDownloadResume = () => {
    const success = downloadResume();
    if (!success) {
      alert("이력서 다운로드에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <SlideUpSection>
      <div id="home">
        <section className="py-20 sm:py-20 bg-white dark:bg-slate-900 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto sm:px-8 lg:px-8 w-full">
            <div className="text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex space-x-1.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 dark:bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-slate-800 font-bold text-lg sm:text-xl">
                      L
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 dark:bg-slate-300 rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-slate-800 font-bold text-lg sm:text-xl">
                      H
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 dark:bg-slate-400 rounded-lg flex items-center justify-center">
                    <span className="text-white dark:text-slate-800 font-bold text-lg sm:text-xl">
                      S
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2 sm:mb-4">
                안녕하세요,
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-4">
                프론트엔드 개발자
              </h1>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-slate-100">
                류현식입니다
              </h1>
              <p className="max-w-xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 sm:mb-12">
                지속 가능한 서비스를 고민하는 개발자입니다.
              </p>

              <div className="flex justify-center mb-6 sm:mb-8">
                <img
                  src="/assets/img/My_Icon.webp"
                  alt="프로필 사진"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
                />
              </div>

              <button
                onClick={handleDownloadResume}
                className="mb-8 sm:mb-20 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-800 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl transition-colors duration-200 inline-flex items-center text-sm sm:text-base cursor-pointer"
              >
                <span className="mr-2">이력서 다운로드</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-auto mb-6 sm:mb-8">
            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center cursor-pointer animate-bounce"
            >
              <span className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 mb-2">
                Scroll Down
              </span>
              <div className="flex flex-col space-y-1">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
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
