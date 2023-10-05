// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import DogDayCare from './components/DogDayCare';
import Information from './components/Information';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dogdaycare" element={<DogDayCare />} />
        <Route path="/information/:img/:age/:sex/:name/:breed/:chipNumber/:ownerName/:ownerLast/:ownerPhoneNumber" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
