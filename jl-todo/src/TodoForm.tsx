import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim() === '') return;

    onAdd(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} className="todoForm">
      <input
        type="text"
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
