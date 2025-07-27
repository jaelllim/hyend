import TodoListItem from './TodoListitem';
import Todo from '../constants';
import React from 'react';

const TodoList = ({ todo, setTodo }: { todo: Todo[]; setTodo: Function }) => {
  const onRemove = (text: string) => {
    setTodo(todo.filter((eachtodo) => eachtodo.text !== text));
  };

  return (
    <>
      {todo.map((eachtodo) => (
        <TodoListItem
          key={eachtodo.id}
          todo={{
            id: eachtodo.id,
            text: eachtodo.text,
            selected: eachtodo.selected,
          }}
          onRemove={() => onRemove(eachtodo.text)}
        />
      ))}
    </>
  );
};


export default TodoList;
