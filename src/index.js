import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attraction from './Attraction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/attraction/:id" element={<Attraction/>} />
  </Routes>
</BrowserRouter>
);

reportWebVitals();
