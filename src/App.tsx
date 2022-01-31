import React, { FC, ReactElement } from 'react';
import Landing from './components/Landing';
import About from './components/About';
import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <div className='App'>
      <Landing />
      <About />
    </div>
  );
};

export default App;
