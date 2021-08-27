import React, { useMemo } from 'react';

import { useTodo } from '../../hooks/useTodo';
import { Container } from './styles';

export default function ControlsTodo(): JSX.Element | null {
  const {
    todos,
    handleOptionFiltered,
    optionFiltered,
    removeAllTodosCompleted,
  } = useTodo();
  const itemsLeft = useMemo(() => {
    return todos.filter(todo => todo.checked === false).length;
  }, [todos]);

  if (todos.length <= 0) {
    return null;
  }

  return (
    <Container>
      <p>
        {itemsLeft} {itemsLeft > 1 ? 'items' : 'item'} left
      </p>
      <div>
        <button
          onClick={() => handleOptionFiltered('all')}
          className={optionFiltered === 'all' ? 'active' : ''}
        >
          All
        </button>

        <button
          onClick={() => handleOptionFiltered('active')}
          className={optionFiltered === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button
          onClick={() => handleOptionFiltered('completed')}
          className={optionFiltered === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>
      <button onClick={removeAllTodosCompleted}>Clear Completed</button>
    </Container>
  );
}
