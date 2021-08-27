import { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

interface ITodoContext {
  todos: {
    id: number | string;
    task: string;
    checked: boolean;
  }[];
  optionFiltered: string;
  handleOptionFiltered: (option: string) => void;
  addTodo: (value: string) => void;
  removeTodo: (id: string | number) => void;
  removeAllTodosCompleted: () => void;
  toggleChecked: (id: string | number, check: boolean) => void;
  toggleCheckedAll: (check: boolean) => void;
}

export function useTodo(): ITodoContext {
  const value = useContext(TodoContext);

  return value;
}
