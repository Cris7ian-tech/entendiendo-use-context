import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);   // Estado para las tareas
    const [taskInput, setTaskInput] = useState('');  // Estado para el valor del input

    // Función para agregar una tarea
    const addTask = () => {
        if (taskInput.trim() === '') return;  // Evita agregar tareas vacías
        setTasks([...tasks, taskInput]);      // Agrega la nueva tarea al estado
        setTaskInput('');                     // Limpia el input
    };

    // Función para eliminar una tarea
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));  // Elimina la tarea correspondiente
    };

    // Retorno del JSX
    return (
        <div>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}  // Actualiza el valor del input
            />
            <button onClick={addTask}>Add Task</button>  {/* Botón para agregar tarea */}
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} onRemove={() => removeTask(index)} />  // Lista de tareas
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
