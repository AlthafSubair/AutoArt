import React, { useState } from 'react'
import Gpay from '../../components/Gpay'



const AddPayment = () => {
    
    
  return (
    <div className='min-h-screen'>
            
            <div className='flex items-center justify-center p-4'><h3 className='sm:text-2xl text-sm font-bold text-slate-800'>ADD PAYMENT OPTIONS</h3></div>

          <Gpay />
      
    </div>
  )
}

export default AddPayment
