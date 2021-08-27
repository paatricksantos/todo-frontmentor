import React, { useContext } from 'react';

import darkIcon from '../../assets/images/icons/icon-moon.svg';
import lightIcon from '../../assets/images/icons/icon-sun.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';

export default function Title(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>TODO</h1>
      <button onClick={toggleTheme}>
        <img src={theme?.title === 'dark' ? lightIcon : darkIcon} alt="" />
      </button>
    </Container>
  );
}
