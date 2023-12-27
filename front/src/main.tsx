import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import { MyProvider } from './core';
import "animate.css";
import './index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <MyProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </MyProvider>
  </React.StrictMode>,
)
