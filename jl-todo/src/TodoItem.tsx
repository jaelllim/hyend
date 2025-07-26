import React from 'react';
import './TodoItem.css';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="todoItem">
      <div className="ItemIndex">
        <span>{todo.id}</span>
      </div>
      <div className={`ItemContent ${todo.done ? 'done' : ''}`}>
        <span>{todo.text}</span>
      </div>
      <div className="ItemBtn">
        <span>삭제</span>
      </div>
    </div>
  );
}

export default TodoItem;
