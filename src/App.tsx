import React, { FC, ReactElement } from 'react';
import { AppContextProvider } from './context';
import ScrollProgress from './components/ScrollProgress';
import Landing from './components/Landing';
import About from './components/About';
import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <div className='App'>
      <AppContextProvider>
        <ScrollProgress />
        <Landing />
        <About />
      </AppContextProvider>
    </div>
  );
};

export default App;
