import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './Assets/font/ProximaNova-Regular.woff2';
import './Assets/font/ProximaNova-Bold.woff2';
import './Assets/font/ProximaNova-Thin.woff2';
import './Assets/font/ProximaNova-Light.woff2';
import './Assets/font/ProximaNova-Semibold.woff2';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
