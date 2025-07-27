import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useRef, useState} from "react";
import Todo from "../constants";
import TodoTemplate from "./Todotemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";


function App() {

  const [todo, setTodo] = useState<Todo[]>([]);
  const newtodoRef = useRef<HTMLInputElement>(null);

  const onSubmit = (newtext: React.RefObject<HTMLInputElement | null>) => {
    if (newtext.current === null) {
      return;
    }
    const newtodo: Todo = {
      id: uuidv4(),
      text: String(newtext.current.value),
      selected: false,
    };
    setTodo([...todo, newtodo]);
    newtext.current.value = '';
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert newtodoRef={newtodoRef} onSubmit={onSubmit}></TodoInsert>
        <TodoList todo={todo} setTodo={setTodo} />
      </TodoTemplate>
    </>
  );
}

export default React.memo(App);
