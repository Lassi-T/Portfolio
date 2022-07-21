import React, { useEffect, useState } from 'react';
import { useCtx } from '../../context';

import './ScrollProgress.scss';

const SrollProgress = (): React.ReactElement => {
  const [progress, setProgress] = useState(0);
  const { scrollPos } = useCtx();

  useEffect(() => {
    setProgress((scrollPos / window.innerHeight) * 100);
  }, [scrollPos]);

  return (
    <div className='scroll-progress'>
      <div className='scroll-progress__bar' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default SrollProgress;
