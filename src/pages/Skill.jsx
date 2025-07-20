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
import SlideUpSection from '../components/SlideUpSection';

const Skills = () => {

  const TailwindIcon = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      className={className}
      fill="currentColor"
    >
      <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"/>
    </svg>
  );


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
      icon: TailwindIcon,
      color: 'bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/20 dark:hover:bg-teal-800/30',
      iconColor: 'text-teal-500 dark:text-teal-400',
      isSvg: true
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
    <SlideUpSection>
    <section id="skill" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">기술 스택</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            현재 사용할 수 있는 기술들입니다.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-8 text-center">Frontend</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {frontendSkills.map((skill, index) => (
             <div 
                key={index} 
                className={`${skill.color} rounded-lg p-6 text-center border border-gray-200 dark:border-slate-600 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="text-4xl mb-3">
                  {skill.isSvg ? (
                    <skill.icon className={`w-10 h-10 mx-auto ${skill.iconColor}`} />
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
        <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm ">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-6 text-center">또 이런 경험도 있어요</h3>
          <div className='flex justify-center'>
          <div>
              <h4 className="font-medium text-gray-900 dark:text-slate-100 flex items-center">
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <li>• Next.Js 현재 학습중</li>
                <li>• Vercel 활용 프로젝트 배포</li>
                <li>• JWT 토큰을 활용한 로그인/회원가입</li>
                <li>• 반응형 웹 디자인 구현</li>
                <li>• 외부 API 사용 (Naver Map, Kakao Map)</li>
                <li>• SocketJs 기반 실시간 통신 환경 제공</li>
              </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
    </SlideUpSection>
  );
};

export default Skills;