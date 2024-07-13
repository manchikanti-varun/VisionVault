import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeContextProvider from './Context/HomeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
);

reportWebVitals();
