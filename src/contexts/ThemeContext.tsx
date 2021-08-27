import React, { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import dark from '../assets/styles/themes/dark';
import light from '../assets/styles/themes/light';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme | undefined;
}

interface ITheme {
  title: string;

  colors: {
    backgroundColor: string;
    primary: string;
    secondary: string;
    tertiary: string;

    textColor: string;
  };
}

export const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('@theme:todo', dark);

  function toggleTheme() {
    if (theme.title === 'dark') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
