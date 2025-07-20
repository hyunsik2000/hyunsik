const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section - 개인 소개 */}
      <section className="py-20 bg-white dark:bg-slate-900 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* 로고/아이콘 영역 */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/30 dark:shadow-violet-400/20">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 dark:shadow-emerald-400/20">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 dark:shadow-amber-400/20">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              안녕하세요,
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">프론트엔드 개발자</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                류현식
              </span>
              <span className="text-gray-900 dark:text-slate-100">입니다</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-slate-300 mb-4">
              React를 중심으로 웹 프론트엔드를 개발합니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-300 mb-12">
              함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.
            </p>
            
            {/* 다운로드 버튼 */}
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 dark:from-violet-400 dark:to-purple-500 dark:hover:from-violet-500 dark:hover:to-purple-600 text-white px-8 py-3 rounded-xl transition-all duration-300 inline-flex items-center shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105">
              <span className="mr-2">이력서 다운로드</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;