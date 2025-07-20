import React from 'react';
import SlideUpSection from '../components/SlideUpSection';

const About = () => {
const capabilities = [
  {
    title: 'React 기반 프론트엔드 개발',
    description: '진행한 대부분 프로젝트에서 React.js를 활용한 개발 하였습니다. JavaScript(ES6+), CSS3, tailwindcss를 기반으로 컴포넌트 기반 웹 애플리케이션을 구현할 수 있습니다.',
    skills: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'tailwindcss'],
    icon: '⚛️'
  },
  {
    title: '실시간 데이터 처리 및 API 연동',
    description: 'Naver Map API, SocketJS를 활용한 실시간 통신 구현과 AWS S3 연동 경험이 있습니다. Context API를 통한 전역 상태 관리와 RESTful API 통신으로 동적인 웹 서비스를 개발할 수 있습니다.',
    skills: ['SocketJS', 'Context API', 'REST API', 'AWS S3'],
    icon: '🔄'
  },
  {
    title: '협업 도구 활용 및 프로젝트 관리',
    description: 'GitHub을 통한 버전 관리와 팀 협업 경험이 있으며, Notion과 Figma를 활용해 명확한 개발 가이드를 작성하여 규칙을 정하여 개발한 경험이 있습니다.',
    skills: ['Git', 'GitHub', 'Notion', 'Figma'],
    icon: '🤝'
  },
  {
    title: '사용자 경험 개선 및 성능 최적화',
    description: '동영상 스트리밍, 무한 스크롤을 구현하면서 매끄러운 사용자 경험을 고민하였습니다. 직관적인 UI/UX 설계를 통해 사용자 편의성 향상에 집중합니다.',
    skills: ['UX/UI', 'Performance', 'Streaming', 'Optimization'],
    icon: '🎯'
  }
];

  return (
    <SlideUpSection>
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 dark:text-white'>
          개발자 <span className='bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent'>
            류현식
          </span>은
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-300">
            다수의 협업을 통한 개발 경험을 통해 <span className='bg-gradient-to-r font-bold from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent'>소통</span>
            과 <span className='bg-gradient-to-br font-semibold from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 bg-clip-text text-transparent'>존중</span>
            을 중요시 여깁니다. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-blue-400/10 transition-all duration-300 hover:border-gray-300 dark:hover:border-slate-600"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{capability.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                  {capability.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {capability.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {capability.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 text-xs rounded-full text-white ${
                      skillIndex % 2 === 0 
                        ? 'bg-blue-500 dark:bg-blue-400 shadow-lg dark:shadow-blue-400/20' 
                        : 'bg-cyan-500 dark:bg-cyan-400 shadow-lg dark:shadow-cyan-400/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SlideUpSection>
  );
};

export default About;