import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Saved from './containers/Saved';
import NewSet from './containers/NewSet';
import Profile from './containers/Profile';
import SearchSet from './containers/SearchSet';
import DisplaySet from './containers/DisplaySet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Saved" element={<Saved />}/>
        <Route path="/NewSet" element={<NewSet />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Set" element={<DisplaySet />}/>
        <Route path="/Search/:searchPhrase" element={<SearchSet />}/>
      </Routes>
    </Router>
  );
}

export default App;
