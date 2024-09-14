import React from 'react'
import { useTheme } from './context/ThemeContext';
import TodoList from './context/TodoList';
import './App.css'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>To-Do List</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
      <TodoList />
    </div>
  );
};

export default App
