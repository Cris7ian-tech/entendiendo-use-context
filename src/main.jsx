import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext'; // Asegúrate de importar el ThemeProvider

// Crear la raíz del árbol de React en el contenedor con id 'root'
const root = createRoot(document.getElementById('root'));

// Renderizar la aplicación en el contenedor raíz
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);