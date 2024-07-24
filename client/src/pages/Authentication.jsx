import  { useState } from 'react'
import { Login } from '../components/Login'
import Register from '../components/Register'

export const Authentication = () => {

  const [reg, setReg] = useState(false)

  
  
  return (

    <div className='flex min-h-screen'>
      <div className='hidden nl:w-3/12 relative nl:flex items-center justify-center h-svh'>
        <img src="/authbanneer.png" alt="AUTOART" />
      </div>
      <div className='w-full flex flex-col items-center justify-center nl:w-6/12 nl:h-svh h-scree'>
        <p className='text-center text-gray-700 font-bold tracking-wider'>Welcome to AUTOART</p>
        <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {  
        reg ?  <div>
        <Register />
        <button className='bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-4' onClick={() => setReg(!reg)}>Already have an account?</button>
        </div>:
        <div>
        <Login />
        <button className='bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-4' onClick={() => setReg(!reg)}>Don't have an Account?</button>
        </div>
}
        
        </div>
      </div>
      <div className='hidden nl:w-3/12 relative nl:flex items-center justify-center h-svh'>
        <img src="/authbanneerrg.png" alt="AUTOART" />
      </div>
    </div>

  )
}
