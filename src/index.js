import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdSClKKrnYih4BCGzFjq7QEjzf1bZth80",
  authDomain: "react-blog-97034.firebaseapp.com",
  projectId: "react-blog-97034",
  storageBucket: "react-blog-97034.appspot.com",
  messagingSenderId: "692333453560",
  appId: "1:692333453560:web:b8ff404e4e703d7c169b0d"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
