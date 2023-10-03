import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import DogDayCare from './components/DogDayCare'
import Information from './components/Information'

function App() {
  

  return (
    <div className="App">
      <Routes>

          <Route path = '/'
          element = {<Welcome/>} />

          <Route path = '/dogdaycare'
          element = {<DogDayCare/>} />

          <Route path = '/information'
          element = {<Information/>} />

        
      </Routes>

    </div>
  )
}

export default App
