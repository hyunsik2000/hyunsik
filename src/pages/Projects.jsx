import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CaféFlow',
      subtitle: '실시간 카페 좌석 확인 서비스',
      description: '사용자에게 실시간으로 카페 별 좌석의 이용 현황 정보를 전달하는 서비스입니다. 지도를 통해 위치 근처 카페를 검색하고, 카페의 혼잡도 및 정보를 확인할 수 있습니다.',
      role: '조장 & Frontend Developer',
      keyFeatures: [
        'Naver Map API 연동 및 지도 구현',
        'SocketJS를 이용한 실시간 데이터 통신',
        'Context API를 통한 사용자 정보 전역 관리',
        'Axios를 통한 RESTful API 통신'
      ],
      techStack: ['React', 'JavaScript', 'Naver Map API', 'SocketJS', 'Axios', 'Context API'],
      highlights: [
        '실시간 카페 혼잡도 표시',
        '지도 기반 카페 검색',
        '1대1 채팅 기능',
        '커뮤니티 게시판'
      ],
      color: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-500 dark:text-blue-400',
      icon: '☕'
    },
    {
      id: 2,
      title: 'Fizz!',
      subtitle: 'Wellness Challenge 커뮤니티',
      description: '각자가 수행한 Wellness한 작은 활동을 short-form 챌린지로 승화시켜 건강하고 긍정적인 사회를 만드는 것을 목표로 하는 웰니스 챌린지 커뮤니티입니다.',
      role: 'Frontend 팀장',
      keyFeatures: [
        '영상 스트리밍 구현 (hls.js)',
        '숏폼 영상 스크롤 UI 개발',
        '동영상 업로드 시스템 구현',
        'AWS S3 & SSE 활용'
      ],
      techStack: ['React', 'JavaScript', 'hls.js', 'AWS S3', 'SSE', 'Intersection Observer API'],
      highlights: [
        '고품질 동영상 스트리밍',
        '무한 스크롤 숏폼 UI',
        '실시간 업로드 진행률',
        '메모리 최적화'
      ],
      color: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-500 dark:text-green-400',
      icon: '🥤'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      subtitle: '개인 포트폴리오 웹사이트',
      description: 'React와 Tailwind CSS를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI/UX를 통해 개발 역량과 프로젝트를 효과적으로 소개합니다.',
      role: 'Frontend Developer',
      keyFeatures: [
        'React 컴포넌트 기반 개발',
        'Tailwind CSS 스타일링',
        '반응형 웹 디자인',
        'Vite 빌드 도구 활용'
      ],
      techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
      highlights: [
        '컴포넌트 기반 구조',
        '모던한 디자인',
        '완전 반응형',
        '빠른 로딩 속도'
      ],
      color: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-500 dark:text-purple-400',
      icon: '💼'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">프로젝트</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            지금까지 진행한 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${project.color} rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* 프로젝트 정보 */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className={`text-4xl mr-4 ${project.iconColor}`}>{project.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100">{project.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-slate-300">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                      {project.role}
                    </span>
                  </div>

                  {/* 주요 기능 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-slate-100 mb-3">🔧 주요 기능</h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2 text-gray-400 dark:text-slate-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 사이드 정보 */}
                <div className="space-y-6">
                  {/* 기술 스택 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-slate-100 mb-3">🛠 Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 주요 성과 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-slate-100 mb-3">✨ Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-slate-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 프로젝트 링크 */}
                  <div className="pt-4">
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gray-900 dark:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-slate-600 transition-colors">
                        <span className="mr-2">📂</span>
                        GitHub
                      </button>
                      <button className="flex-1 bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                        <span className="mr-2">🔗</span>
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트 요약 */}
        <div className="mt-16 bg-gray-50 dark:bg-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-6 text-center">프로젝트 경험 요약</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-2">3+</div>
              <p className="text-gray-600 dark:text-slate-300">완료된 프로젝트</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 dark:text-green-400 mb-2">10+</div>
              <p className="text-gray-600 dark:text-slate-300">사용 기술</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-2">2</div>
              <p className="text-gray-600 dark:text-slate-300">팀 리더 경험</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;