import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faGitAlt, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const frontendSkills = [
    {
      name: 'HTML5',
      icon: faHtml5,
      color: 'bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-800/30',
      iconColor: 'text-orange-500 dark:text-orange-400'
    },
    {
      name: 'CSS3',
      icon: faCss3Alt,
      color: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-800/30',
      iconColor: 'text-blue-500 dark:text-blue-400'
    },
    {
      name: 'JavaScript',
      icon: faJs,
      color: 'bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:hover:bg-yellow-800/30',
      iconColor: 'text-yellow-500 dark:text-yellow-400'
    },
    {
      name: 'React',
      icon: faReact,
      color: 'bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900/20 dark:hover:bg-cyan-800/30',
      iconColor: 'text-cyan-500 dark:text-cyan-400'
    },
    {
      name: 'Tailwind CSS',
      icon: '💨', // Tailwind CSS는 FontAwesome에 없어서 이모지 유지
      color: 'bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/20 dark:hover:bg-teal-800/30',
      iconColor: 'text-teal-500 dark:text-teal-400',
      isEmoji: true
    }
  ];

  const collaborationSkills = [
    {
      name: 'Git',
      icon: faGitAlt,
      color: 'bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-800/30',
      iconColor: 'text-red-500 dark:text-red-400'
    },
    {
      name: 'Figma',
      icon: faFigma,
      color: 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/20 dark:hover:bg-purple-800/30',
      iconColor: 'text-purple-500 dark:text-purple-400'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">기술 스택</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            현재 사용할 수 있는 기술들입니다.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-8 text-center">Frontend Development</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {frontendSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`${skill.color} rounded-lg p-6 text-center border border-gray-200 dark:border-slate-600 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="text-4xl mb-3">
                  {skill.isEmoji ? (
                    <span>{skill.icon}</span>
                  ) : (
                    <FontAwesomeIcon 
                      icon={skill.icon} 
                      className={skill.iconColor}
                    />
                  )}
                </div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-slate-100">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-8 text-center">Collaboration & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
            {collaborationSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`${skill.color} rounded-lg p-6 text-center border border-gray-200 dark:border-slate-600 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="text-4xl mb-3">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className={skill.iconColor}
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-slate-100">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-6 text-center">기술 활용 경험</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-slate-100 mb-4 flex items-center">
                <span className="mr-2">💪</span>
                강점
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <li>• 반응형 웹 디자인 구현</li>
                <li>• React를 활용한 컴포넌트 기반 개발</li>
                <li>• Tailwind CSS로 빠른 스타일링</li>
                <li>• Git을 통한 버전 관리 및 협업</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-slate-100 mb-4 flex items-center">
                <span className="mr-2">📚</span>
                학습 중
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <li>• TypeScript</li>
                <li>• Next.js</li>
                <li>• 웹 성능 최적화</li>
                <li>• 테스트 코드 작성</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;