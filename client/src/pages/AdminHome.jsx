import React from 'react'
import {MdList, MdAddCircleOutline, MdOutlineAddCard, MdPayments} from 'react-icons/md'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div className='min-h-screen'>

      <div className='flex md:flex-row gap-2 m-2 flex-col'>
<div className='h-72 md:w-1/4 rounded-md shadow-lg border hover:border-blue-300  hover:bg-black hover:text-white'>
  <Link to='/addcolor'>
  <div className='flex items-center justify-center'>
  <MdAddCircleOutline className='h-52 w-52 text-gray-900 hover:text-white'/>
  </div>
  <div className='flex items-center justify-center'>
    <h1 className='text-3xl font-bold text-slate-700 uppercase hover:text-white'>Add Colors</h1>
  </div>
  </Link>
</div>

<div className='h-72 md:w-1/4 rounded-md shadow-lg border hover:border-blue-300  hover:bg-black hover:text-white'>
  <Link to='/addpayment'>
  <div className='flex items-center justify-center'>
  <MdOutlineAddCard className='h-52 w-52 text-gray-900 hover:text-white'/>
  </div>
  <div className='flex items-center justify-center'>
    <h1 className='text-3xl font-bold text-slate-700 uppercase hover:text-white'>ADD Payment</h1>
  </div>
  </Link>
</div>

<div className='h-72 md:w-1/4 rounded-md shadow-lg border hover:border-blue-300  hover:bg-black hover:text-white'>
  <Link to='/adminenquire'>
  <div className='flex items-center justify-center'>
  <MdList className='h-52 w-52 text-gray-900 hover:text-white'/>
  </div>
  <div className='flex items-center justify-center'>
    <h1 className='text-3xl font-bold text-slate-700 uppercase hover:text-white'>Enquire`s</h1>
  </div>
  </Link>
</div>

<div className='h-72 md:w-1/4 rounded-md shadow-lg border hover:border-blue-300  hover:bg-black hover:text-white'>
  <Link to='/verifypayment'>
  <div className='flex items-center justify-center'>
  <MdPayments className='h-52 w-52 text-gray-900 hover:text-white'/>
  </div>
  <div className='flex items-center justify-center'>
    <h1 className='text-3xl font-bold text-slate-700 uppercase hover:text-white'>Verify Payments</h1>
  </div>
  </Link>
</div>

      </div>

    </div>
  )
}

export default AdminHome