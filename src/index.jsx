import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// root es la raiz de la aplicación que se monta en el div
const root = createRoot(container);

// renderiza algo en la raíz de la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
