import React from 'react'
import Color from '../components/Color'


function ColorSelection() {
  return (
    <div className='p-1 min-h-screen'>

      <div className='flex items-center justify-center p-4'>
        <h2 className='text-2xl font-bold text-slate-800'>Find your <span className='font-chiller text-red-600 text-4xl'>C</span>
          <span className='font-chiller text-green-600 text-4xl'>O</span>
          <span className='font-chiller text-yellow-600 text-4xl'>L</span>
          <span className='font-chiller text-blue-600 text-4xl'>O</span>
          <span className='font-chiller text-red-600 text-4xl'>R</span><span className='font-chiller text-violet-800 text-4xl'>,</span> Find Yourself</h2>
      </div>
     <div><Color /></div>
      
    
      
    </div>
  )
}

export default ColorSelection
