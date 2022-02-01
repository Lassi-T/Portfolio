import React, { FC, ReactElement } from 'react';
import Typewriter from 'typewriter-effect';
import { ReactComponent as ColorWave } from '../../assets/svg/colorWave.svg';
import { ReactComponent as ColorWaveBG } from '../../assets/svg/colorWaveBG.svg';
import { ReactComponent as Corner } from '../../assets/svg/corner.svg';
import './Landing.scss';

const subtitleText = `Information technology student at Tampere University. Enthusiastic software developer with experience in
full stack development. Interested in UI/UX design.`;

const Landing: FC = (): ReactElement => {
  return (
    <div className='landing'>
      <ColorWave className='color-wave' />
      <ColorWaveBG className='color-wave-bg' />

      <div className='landing-text'>
        {/*<div className='landing-text__name'>
          <Lassi className='landing-text__svg' />
          <Timoskainen className='landing-text__svg' />
        </div>*/}
        <h1 className='landing-text__title'>Lassi Timoskainen</h1>
        <div className='landing-text__subtitle'>
          <Corner className='landing-text__subtitle corner' />
          <h2 className='landing-text__subtitle-text'>
            <Typewriter
              options={{
                cursor: '_',
              }}
              onInit={(typewriter) => {
                typewriter.changeDelay(10);
                typewriter.typeString(subtitleText).start();
              }}
            />
          </h2>
        </div>
      </div>

      <div className='scroll-indicator'>
        <div className='scroll-indicator__wheel'></div>
      </div>
    </div>
  );
};

export default Landing;
