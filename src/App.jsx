import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Finder from './pages/Finder'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/finder' element={<Finder/>}/>
    </Routes>
    </>
  )
}

export default App
