import React, { FC, ReactElement, useState, useEffect } from 'react';
import { useCtx } from '../../context';
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
const textLeft: string[] = ['C++', 'Python', 'Javascript', 'Typescript', 'React', 'Vue', 'SCSS', 'HTML'];
const textRight: string[] = ['Node', 'Express', 'MongoDB', 'AWS', 'SQL', 'Git', 'Figma', 'Jira'];

const About: FC = (): ReactElement => {
  const [mobile, setMobile] = useState(window.innerWidth <= 880);
  const [iconSize, setIconSize] = useState(window.innerWidth <= 880 ? 30 : 35);
  const [showContent, setShowContent] = useState(false);

  const { scrollPos } = useCtx();

  // Page scaling
  useEffect(() => {
    window.addEventListener('resize', (): void => {
      setMobile(window.innerWidth <= 880);
    });
  });
  useEffect(() => {
    setIconSize(mobile ? 30 : 40);
  }, [mobile]);

  useEffect(() => {
    if (!showContent) {
      if (scrollPos > 600) {
        setShowContent(true);
      }
    }
  }, [scrollPos]);

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  if (mobile) {
    return (
      <div className='about'>
        <ColorWaveBG className='color-wave-about' />
        <div className='content content__mobile'>
          <img className='profile profile__mobile' src={profile} alt='profile' />

          <div className='list__info mobile'>
            {showContent ? (
              <div className='row'>
                <div className='vertical right animation__left'>
                  {textLeft.map((text, i) => {
                    return (
                      <p className='info-text' key={`info-text-${i}`}>
                        {text}
                      </p>
                    );
                  })}
                </div>
                <div className='vertical left vertical__mobile animation__left'>
                  <SiCplusplus size={iconSize} />
                  <FaPython size={iconSize} />
                  <SiJavascript size={iconSize} />
                  <SiTypescript size={iconSize} />
                  <FaReact size={iconSize} />
                  <FaVuejs size={iconSize} />
                  <FaSass size={iconSize} />
                  <FaHtml5 size={iconSize} />
                </div>
              </div>
            ) : null}

            <div className='divider'></div>

            {showContent ? (
              <div className='row'>
                <div className='vertical right vertical__mobile animation__right'>
                  <FaNodeJs size={iconSize} />
                  <SiExpress size={iconSize} />
                  <SiMongodb size={iconSize} />
                  <FaAws size={iconSize} />
                  <AiOutlineConsoleSql size={iconSize} />
                  <FaGitSquare size={iconSize} />
                  <FaFigma size={iconSize} />
                  <SiJirasoftware size={iconSize} />
                </div>
                <div className='vertical left animation__right'>
                  {textRight.map((text, i) => {
                    return (
                      <p className='info-text' key={`info-text-${i}`}>
                        {text}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {showContent ? (
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
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className='about'>
      <ColorWaveBG className='color-wave-about' />

      <div className='content'>
        {showContent ? (
          <div className='list__info left'>
            <div className='vertical right'>
              <SiCplusplus size={iconSize} className='icon' />
              <FaPython size={iconSize} className='icon' />
              <SiJavascript size={iconSize} className='icon' />
              <SiTypescript size={iconSize} className='icon' />
              <FaReact size={iconSize} className='icon' />
              <FaVuejs size={iconSize} className='icon' />
              <FaSass size={iconSize} className='icon' />
              <FaHtml5 size={iconSize} className='icon' />
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
        ) : (
          <div></div>
        )}

        <div className='list__middle'>
          {showContent ? (
            <>
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
            </>
          ) : null}
        </div>

        {showContent ? (
          <div className='list__info right'>
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
              <FaNodeJs size={iconSize} className='icon' />
              <SiExpress size={iconSize} className='icon' />
              <SiMongodb size={iconSize} className='icon' />
              <FaAws size={iconSize} className='icon' />
              <AiOutlineConsoleSql size={iconSize} className='icon' />
              <FaGitSquare size={iconSize} className='icon' />
              <FaFigma size={iconSize} className='icon' />
              <SiJirasoftware size={iconSize} className='icon' />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default About;
