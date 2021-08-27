import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../../assets/images/icons/icon-cross.svg';
import Checkbox from '../../Checkbox';
import { Container } from './styles';

interface ITodo {
  id: string | number;
  task: string;
  checked: boolean;
  removeTodo: (id: string | number) => void;
  toggleChecked: (id: string | number, check: boolean) => void;
}

export default function Todo({
  id,
  task,
  checked,
  removeTodo,
  toggleChecked,
}: ITodo): JSX.Element {
  const [remove, setRemove] = useState(false);

  function handleRemoveTodo() {
    setRemove(true);
    setTimeout(() => {
      removeTodo(id);
    }, 500);
  }

  return (
    <Container checked={checked} className={remove ? 'fall' : ''}>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={event => toggleChecked(id, event.target.checked)}
      />
      <p>{task}</p>
      <button onClick={handleRemoveTodo}>
        <CloseIcon />
      </button>
    </Container>
  );
}
