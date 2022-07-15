import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './assets/index.css';
import App from './components/App';
import Nav from './components/nav';
import TypedReact from './components/TypedReact';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <TypedReact strings={[
    	"Bonjour ! Je m'appelle <strong>Thomas</strong>.",
      "Je suis <strong>web front developer junior</strong>.",
      "Faisons connaissance !"
    ]}/>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
