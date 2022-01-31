import React, { FC, ReactElement } from 'react';
import Landing from './components/Landing';
import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <div className='App'>
      <Landing />
    </div>
  );
};

export default App;
