import React, { FC, ReactElement } from 'react';
import { ReactComponent as Profile } from '../../assets/svg/profile.svg';
import './About.scss';

const About: FC = (): ReactElement => {
  return (
    <div className='about'>
      <Profile className='profile' />
    </div>
  );
};

export default About;
