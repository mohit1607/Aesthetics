import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
      <div className='w-full h-[100vh] relative flex justify-center items-center flex-col gap-2'>
          My UI components
          <ul>
              <li><NavLink className='text-blue-500 hover:underline' to='/imagezoomdesc'>Image spread description section</NavLink></li>
              <li><NavLink className='text-blue-500 hover:underline' to='/triangles'>Animating Triangles</NavLink></li>
              <li><NavLink className='text-blue-500 hover:underline' to='/3dpc'>3D model for computer</NavLink></li>
              <li><NavLink className='text-blue-500 hover:underline' to='/matilda'>Matilda 3D Model</NavLink></li>
          </ul>
      </div>
  )
}

export default Home