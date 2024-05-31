import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Saved from './containers/Saved';
import NewSet from './containers/NewSet';
import Profile from './containers/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Saved" element={<Saved />}/>
        <Route path="/NewSet" element={<NewSet />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
