import React from 'react'

const EnquirItem = ({id, image, color, cat, model}) => {
  const path = image ? `http://localhost:3001/${image.replace(/\\/g, '/')}` : "i"
  return (
    <div className='bg-white shadow-lg m-2 rounded-lg'>
      <div className='flex items-center justify-center p-2'>  
      <img src={path} alt="" className='h-80 w-96'/>
      </div>
    
      <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-bold pb-3 text-slate-800'>{color}</h1>
                  </div>
                  <div className='flex pl-3 pt-2 items-center justify-center'>
                    <h1 className='text-sm font-mono pb-2'>Model: {model}</h1>
                  </div>
                  <div className='flex items-center justify-center'>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 p-2 m-2 ">#{cat}</span>
    </div></div>
  )
}

export default EnquirItem
