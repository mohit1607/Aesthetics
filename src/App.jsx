import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ImageZoomDesc from './pages/ImageZoomDesc'

function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/imagezoomdesc' element={<ImageZoomDesc/>}/>
   </Routes>
   </>
  )
}

export default App
