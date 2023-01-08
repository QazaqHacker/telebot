import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRoute} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRoute>
    <App />
  </BrowserRoute>
  </React.StrictMode>
);


