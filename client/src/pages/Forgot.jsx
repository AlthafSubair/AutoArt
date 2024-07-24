import React from 'react'

const Forgot = () => {
  return (
    <div className='min-h-screen '>

      <div className="flex items-center justify-center m-20">  <h1 className='text-2xl font-black'>FORGOT PASSWORD</h1></div>
      <div className='flex items-center justify-center m-20'>
      
      <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <form action="">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required  placeholder="example@gmail.com"  />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    OTP
        </button>
    </form>
</div>
</div>

    </div>
  )
}

export default Forgot
