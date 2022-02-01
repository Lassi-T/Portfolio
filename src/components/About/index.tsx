import React, { FC, ReactElement, useState, useEffect } from 'react';
import { ReactComponent as ColorWaveBG } from '../../assets/svg/colorWaveBG.svg';
import profile from '../../assets/profile.png';
import './About.scss';

//Icons
import {
  FaPython,
  FaReact,
  FaVuejs,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaAws,
  FaGitSquare,
  FaFigma,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTypescript, SiExpress, SiMongodb, SiJirasoftware } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

//Content
const textLeft: Array<string> = ['C++', 'Python', 'Javascript', 'Typescript', 'React', 'Vue', 'SCSS', 'HTML'];
const textRight: Array<string> = ['Node', 'Express', 'MongoDB', 'AWS', 'SQL', 'Git', 'Figma', 'Jira'];

const About: FC = (): ReactElement => {
  const [mobile, setMobile] = useState(window.innerWidth <= 880);
  const [iconSize, setIconSize] = useState(window.innerWidth <= 880 ? 30 : 35);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.innerWidth <= 880);
    });
  });
  useEffect(() => {
    setIconSize(mobile ? 30 : 40);
  }, [mobile]);

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  if (mobile) {
    return (
      <div className='about'>
        <ColorWaveBG className='color-wave-about' />

        <div className='content content__mobile'>
          <img className='profile profile__mobile' src={profile} alt='profile' />

          <div className='list__info'>
            <div className='vertical right'>
              {textLeft.map((text, i) => {
                return (
                  <p className='info-text' key={`info-text-${i}`}>
                    {text}
                  </p>
                );
              })}
            </div>
            <div className='vertical left vertical__mobile'>
              <SiCplusplus size={iconSize} />
              <FaPython size={iconSize} />
              <SiJavascript size={iconSize} />
              <SiTypescript size={iconSize} />
              <FaReact size={iconSize} />
              <FaVuejs size={iconSize} />
              <FaSass size={iconSize} />
              <FaHtml5 size={iconSize} />
            </div>

            <div className='divider'></div>

            <div className='vertical right vertical__mobile'>
              <FaNodeJs size={iconSize} />
              <SiExpress size={iconSize} />
              <SiMongodb size={iconSize} />
              <FaAws size={iconSize} />
              <AiOutlineConsoleSql size={iconSize} />
              <FaGitSquare size={iconSize} />
              <FaFigma size={iconSize} />
              <SiJirasoftware size={iconSize} />
            </div>

            <div className='vertical left'>
              {textRight.map((text, i) => {
                return (
                  <p className='info-text' key={`info-text-${i}`}>
                    {text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className='links'>
            <FaLinkedin
              size={mobile ? 55 : 65}
              className='links__link mobile'
              onClick={() => handleLinkClick('https://www.linkedin.com/in/lassit/')}
            />
            <FaGithub
              size={mobile ? 55 : 65}
              className='links__link mobile'
              onClick={() => handleLinkClick('https://github.com/Lassi-T/')}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='about'>
      <ColorWaveBG className='color-wave-about' />

      <div className='content'>
        <div className='list__info'>
          <div className='vertical right'>
            <SiCplusplus size={iconSize} />
            <FaPython size={iconSize} />
            <SiJavascript size={iconSize} />
            <SiTypescript size={iconSize} />
            <FaReact size={iconSize} />
            <FaVuejs size={iconSize} />
            <FaSass size={iconSize} />
            <FaHtml5 size={iconSize} />
          </div>

          <div className='divider'></div>

          <div className='vertical left'>
            {textLeft.map((text, i) => {
              return (
                <p className='info-text' key={`info-text-${i}`}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>

        <div className='list__middle'>
          <img className='profile' src={profile} alt='profile' />
          <div className='links'>
            <FaLinkedin
              size={65}
              className='links__link'
              onClick={() => handleLinkClick('https://www.linkedin.com/in/lassit/')}
            />
            <FaGithub
              size={65}
              className='links__link'
              onClick={() => handleLinkClick('https://github.com/Lassi-T/')}
            />
          </div>
        </div>

        <div className='list__info'>
          <div className='vertical right'>
            {textRight.map((text, i) => {
              return (
                <p className='info-text' key={`info-text-${i}`}>
                  {text}
                </p>
              );
            })}
          </div>

          <div className='divider'></div>

          <div className='vertical left'>
            <FaNodeJs size={iconSize} />
            <SiExpress size={iconSize} />
            <SiMongodb size={iconSize} />
            <FaAws size={iconSize} />
            <AiOutlineConsoleSql size={iconSize} />
            <FaGitSquare size={iconSize} />
            <FaFigma size={iconSize} />
            <SiJirasoftware size={iconSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
