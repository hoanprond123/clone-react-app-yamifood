import React from 'react';
import ReactDOM from 'react-dom';
import './css/grid.css'
import './css/main.css'
import './css/base.css'
import './css/responsive.css'
import { AppProvider } from './context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


