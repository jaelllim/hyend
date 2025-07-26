import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <div className="todoList">
      {todos.length === 0 ? (
        <span>오늘 할 일을 등록하세요!</span>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
