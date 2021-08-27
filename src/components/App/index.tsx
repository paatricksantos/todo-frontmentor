import React from 'react';

import GlobalStyle from '../../assets/styles/global';
import ThemeProvider from '../../contexts/ThemeContext';
import TodoProvider from '../../contexts/TodoContext';
import ControlsTodo from '../ControlsTodo';
import FormTodo from '../FormTodo';
import ListTodos from '../ListTodos';
import Title from '../Title';
import { Container } from './styles';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <TodoProvider>
        <GlobalStyle />
        <Container>
          <Title />

          <FormTodo />
          <main>
            <ListTodos />
            <ControlsTodo />
          </main>
        </Container>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
