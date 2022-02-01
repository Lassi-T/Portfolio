import React, { FC, ReactElement } from 'react';
import { ReactComponent as ColorWaveBG } from '../../assets/svg/colorWaveBG.svg';
import cpp from '../../assets/icons/cpp.png';
import './About.scss';

const About: FC = (): ReactElement => {
  return (
    <div className='about'>
      <ColorWaveBG className='about__color-wave' />
      <img src={cpp} className='icon'></img>
    </div>
  );
};

export default About;
