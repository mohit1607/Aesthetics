import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ImageZoomDesc from './pages/ImageZoomDesc'
import AnimatingTriangles from './pages/AnimatingTriangles'
import ComputerCanvas from './pages/PcModel'
import Matilda from './pages/Matilda'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imagezoomdesc' element={<ImageZoomDesc />} />
        <Route path='/triangles' element={<AnimatingTriangles />} />
        <Route path='/3dpc' element={<ComputerCanvas />} />
        <Route path='/matilda' element={<Matilda />} />
      </Routes>
    </>
  )
}

export default App
