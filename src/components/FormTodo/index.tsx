import React, { useState } from 'react';

// import doneIcon from '../../assets/images/icons/icon-done.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/icons/icon-done.svg';
import { useTodo } from '../../hooks/useTodo';
import Checkbox from '../Checkbox';
import { Form } from './styles';

function FormTodo(): JSX.Element {
  const [todo, setTodo] = useState('');
  const { addTodo, toggleCheckedAll } = useTodo();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!todo) {
      return;
    }
    addTodo(todo);
    setTodo('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Checkbox
          type="checkbox"
          onChange={event => toggleCheckedAll(event.target.checked)}
        />
        <input
          type="text"
          value={todo}
          onChange={event => setTodo(event.target.value)}
          placeholder="Create a new todo..."
        />
        <button>
          <DoneIcon />
        </button>
      </div>
    </Form>
  );
}

export default FormTodo;
