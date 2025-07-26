import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Rootdiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([]);

  const handleAdd = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <GlobalStyle />
      <Rootdiv>
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} />
      </Rootdiv>
    </>
  );
};

export default App;
