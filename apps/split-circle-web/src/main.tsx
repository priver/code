import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './app.tsx';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
