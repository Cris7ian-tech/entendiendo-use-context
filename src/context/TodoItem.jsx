// src/TodoItem.jsx
import React from 'react';

const TodoItem = ({ task, onRemove }) => {
  return (
    <li>
      {task}
      <button onClick={onRemove}>Delete</button>
    </li>
  );
};

export default TodoItem;