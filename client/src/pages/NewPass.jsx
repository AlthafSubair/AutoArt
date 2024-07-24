import React from 'react'

const NewPass = () => {
  return (
    <div className='min-h-screen '>

    <div className="flex items-center justify-center m-20">  <h1 className='text-2xl font-black'>FORGOT PASSWORD</h1></div>
    <div className='flex items-center justify-center m-20'>
    
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <form action="">
  <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpswd">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpswd" type="password" name="confirmpswd" placeholder="******************" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20" type="submit">
        Sign Up
      </button>
      </div>
  </form>
</div>
</div>

  </div>
  )
}

export default NewPass