import React, { useContext, createContext} from 'react';


import {THEME} from '../constants';

export const ThemeContext = createContext({
  theme: THEME,
  setTheme: () => {},
});

export const ThemeProvider = ({
  children,
  theme = THEME,
  setTheme = () => {},
}) => {
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const {theme} = useContext(ThemeContext);
  return theme;
}
