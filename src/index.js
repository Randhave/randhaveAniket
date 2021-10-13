import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { IconContext } from "react-icons";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <IconContext.Provider value={{ color: "black" }}>
        <App />
      </IconContext.Provider>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

