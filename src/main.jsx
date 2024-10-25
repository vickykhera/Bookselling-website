import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using the correct import
import './App.css';
import App from './App';

// React 18 and above uses the new 'createRoot' API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
