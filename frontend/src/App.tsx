import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Saved from './containers/Saved';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/saved" element={<Saved />}/>
      </Routes>
    </Router>
  );
}

export default App;
