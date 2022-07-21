import React, { useContext, useEffect, useState } from 'react';
import { ContextType } from '../types';

const Context = React.createContext<ContextType>({
  scrollPos: 0,
  setScrollPos: () => null,
});
const useCtx = (): ContextType => useContext(Context);

const AppContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  // Kepp track of page scroll position
  useEffect(() => {
    window.addEventListener('scroll', (): void => {
      setScrollPos(window.scrollY);
    });
    return () =>
      window.removeEventListener('scroll', () => {
        setScrollPos(window.scrollY);
      });
  }, []);

  const defaultValue = {
    scrollPos,
    setScrollPos,
  };

  return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
};

export { useCtx, AppContextProvider };
