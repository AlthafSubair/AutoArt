import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPages() {
  return (
    <section className='h-screen align-middle pt-80'>
      <div className='flex items-center justify-center'>
    <h2 className='text-4xl font-bold text-black'>Page Not Found</h2>
    </div>
    <div className='flex items-center justify-center'>
      <Link to='/' className='btn bg-blue-700 text-white border rounded px-6 mt-4 py-3 hover:bg-green-900 font-medium'>Go Back to Home</Link>
    </div>
  </section>
  )
}

export default ErrorPages
