import React, { useState, createContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

interface ITodo {
  id: number | string;
  task: string;
  checked: boolean;
}

interface ITodoContext {
  todos: ITodo[];
  optionFiltered: string;
  handleOptionFiltered: (option: string) => void;
  addTodo: (value: string) => void;
  removeTodo: (id: string | number) => void;
  removeAllTodosCompleted: () => void;
  toggleChecked: (id: string | number, check: boolean) => void;
  toggleCheckedAll: (check: boolean) => void;
}

const ID_GENERATOR = () => Math.random() * 10;

export const TodoContext = createContext({} as ITodoContext);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('@data-todo', []);
  const [optionFiltered, setOptionFiltered] = useState('all');

  function addTodo(value: string) {
    setTodos(prevState => [
      ...prevState,
      { id: ID_GENERATOR(), task: value, checked: false },
    ]);
  }

  function toggleChecked(id: string | number, check: boolean) {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: check,
          };
        }

        return todo;
      }),
    );
  }

  function toggleCheckedAll(check: boolean) {
    setTodos(prevState =>
      prevState.map(todo => {
        return {
          ...todo,
          checked: check || false,
        };
      }),
    );
  }

  function removeTodo(id: string | number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== Number(id)));
  }

  function handleOptionFiltered(option: string) {
    setOptionFiltered(option);
  }

  function removeAllTodosCompleted() {
    setTodos(prevState => prevState.filter(todo => todo.checked === false));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        optionFiltered,
        handleOptionFiltered,
        addTodo,
        removeTodo,
        removeAllTodosCompleted,
        toggleChecked,
        toggleCheckedAll,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
