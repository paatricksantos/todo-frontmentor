import React from 'react';
import { useMemo } from 'react';

import { useTodo } from '../../hooks/useTodo';
import { Container } from './styles';
import Todo from './Todo';

export default function ListTodos(): JSX.Element {
  const { todos, removeTodo, toggleChecked, optionFiltered } = useTodo();

  const todosFiltered = useMemo(() => {
    if (optionFiltered === 'completed') {
      return todos.filter(todo => todo.checked);
    }

    if (optionFiltered === 'active') {
      return todos.filter(todo => todo.checked === false);
    }

    return todos;
  }, [optionFiltered, todos]);

  return (
    <Container>
      {todosFiltered.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          checked={todo.checked}
          removeTodo={removeTodo}
          toggleChecked={toggleChecked}
        />
      ))}
    </Container>
  );
}
