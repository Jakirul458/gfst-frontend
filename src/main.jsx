

import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter/>
   <Router> <App /></Router>
   
  </React.StrictMode>,
)








