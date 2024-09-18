import React, { useState } from 'react'
import gojo from '../assets/gojo.jpg'
import tohma from '../assets/tohma.jpg'
import zongli from '../assets/zongli.jpg'
import travelar from '../assets/travelar.jpg'
import kaeya from '../assets/kaeya.jpg'

const ImageZoomDesc = () => {
    const [state, setState] = useState({
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
    })

    const handleClick = (number) => {
        let newState = { ...state}
        for( let i = 0; i< 6; i++) {
            if(i === number) {
                newState[i] = true;
            }else {
                newState[i] = false;
            }
        }
        setState(newState)
    }

  return (
    <div className='w-full h-[100vh] relative flex justify-center items-center flex-col gap-2 bg-[#222831]'>
        <div className='w-[50%] h-[90%] flex justify-center gap-3'>
            <div onClick={() => handleClick(1)} className={`${state[1] ? 'flex-[30%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={gojo} className='w-full h-full object-cover' alt='Nani' /></div>
            <div onClick={() => handleClick(2)} className={`${state[2] ? 'flex-[30%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={tohma} className='w-full h-full object-cover' alt='Nani' /></div>
            <div onClick={() => handleClick(3)} className={`${state[3] ? 'flex-[30%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={zongli} className='w-full h-full object-cover' alt='Nani' /></div>
            <div onClick={() => handleClick(4)} className={`${state[4] ? 'flex-[30%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={travelar} className='w-full h-full object-cover' alt='Nani' /></div>
            <div onClick={() => handleClick(5)} className={`${state[5] ? 'flex-[30%]' : 'flex-1'} transition-all ease-in-out duration-500 bg-yellow-200 rounded-[3rem] overflow-hidden`}><img src={kaeya} className='w-full h-full object-cover' alt='Nani' /></div>
            
        </div>
    </div>
  )
}

export default ImageZoomDesc