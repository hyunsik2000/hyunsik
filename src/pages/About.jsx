import React from 'react';

const About = () => {
  const capabilities = [
    {
      title: '모던 프론트엔드 개발',
      description: 'React.js를 이용한 프론트엔드 개발경험이 있으며, JavaScript(ES6), TypeScript에 능숙합니다. Next.js와 더불어 핵심적인 React library 활용 경험이 있습니다.',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'Next.js'],
      icon: '⚛️'
    },
    {
      title: '웹사이트 개선 및 최적화',
      description: '웹사이트를 개발하고 유지보수하면서, 웹사이트의 성능을 측정하고 개선했습니다. 또, 검색엔진 최적화 작업을 통해 유입 트래픽을 6개월간 25.6% 증가시킨 경험이 있습니다.',
      skills: ['Performance', 'SEO', 'Optimization', 'Analytics'],
      icon: '🚀'
    },
    {
      title: '커뮤니케이션 및 협업',
      description: 'Github 이용한 협업 경험이 있으며, Jira, Slack, Notion 등의 협업 도구 사용 경험도 있습니다. 기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.',
      skills: ['Git', 'Jira', 'Slack', 'Notion'],
      icon: '🤝'
    },
    {
      title: '문제 해결 및 학습 능력',
      description: '새로운 기술을 빠르게 학습하고 적용하는 능력을 가지고 있습니다. 복잡한 문제를 체계적으로 분석하고 해결하는 것을 좋아하며, 지속적인 자기계발을 통해 성장하고 있습니다.',
      skills: ['Problem Solving', 'Quick Learning', 'Research', 'Documentation'],
      icon: '🧠'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">핵심 역량</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            유연하게 소통하고 견고하게 개발합니다.
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
  );
};

export default About;