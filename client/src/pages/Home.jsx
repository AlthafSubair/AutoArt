import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaClock, FaHeadset} from 'react-icons/fa'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

function Home() {
  const { currentUser } = useContext(UserContext)
 const navigate = useNavigate()
  const role = currentUser?.role
  
  useEffect(()=>{
    if(role === "admin"){
      navigate('/adminhome')
        }
  })
 
  return (
   <div className='min-h-screen'>
   <div className='text-center p-3'>
<h1 className="text-4xl font-bold mb-4 font-chiller">  <span className='font-chiller text-red-600 text-6xl'>C</span>
          <span className='font-chiller text-green-600 text-4xl font-extrabold'>O</span>
          <span className='font-chiller text-yellow-600 text-4xl font-extrabold'>L</span>
          <span className='font-chiller text-blue-600 text-4xl font-extrabold'>O</span>
          <span className='font-chiller text-red-600 text-4xl font-extrabold'>R</span> YOUR
JOURNEY, DRIVE IN STYLE!</h1>
</div>

<div className="flex flex-row">
<div className="nl:w-4/12 nl:flex hidden">
<img src="file.png" alt="" className=''/>
</div>
<div className='nl:w-8/12 w-full'>


<div className='flex nl:flex-row flex-col pt-10'>
<div className='nl:max-w-sm w-full rounded overflow-hidden shadow-lg border shadow-blue-200 px-2 mx-2 nl:my-0 my-2'>
  <div className=' flex flex-row'>
<div className='flex items-center justify-center w-full'><h1 className='text-center text-xl p-2 text-gray-800 font-semibold'>Quality oF Service</h1></div>
  <div><BsPatchCheckFill className='text-sky-600 h-28 w-28 pX-4 py-2'/></div>
</div>

<hr className='text-blue-600 px-2'/>
 <div className='p-2 flex items-center justify-center'>
  <p className='text-justify font-mono p-2'>
At AutoArt, we take pride in
delivering exceptional quality of service ir
automobile painting. Our team of highly
skilled and experienced technicians is
dedicated to ensuring your vehicle looks
its absolute best.</p>
</div>
</div>
<div className='nl:max-w-sm w-full rounded overflow-hidden shadow-lg border shadow-blue-200 px-2 mx-2 nl:my-0 my-2'>
  <div className=' flex flex-row'>
<div className='flex items-center justify-center'><h1 className='text-center text-xl p-2 text-gray-800 font-semibold'>On Time Delivery</h1></div>
  <div><FaClock className='text-sky-600 h-28 w-28 pX-4 py-2'/></div>
</div>
<hr className='text-blue-600 px-2'/>
 <div className='p-2 flex items-center justify-center'>
  <p className='text-justify font-mono p-2'>
  At AutoArt, we understand the importance of getting your vehicle back on the road without delays.
   Our streamlined painting process and dedicated team ensure that your vehicle is not only painted to perfection but also delivered on time, every time.
    Trust AutoArt for prompt and reliable service, so you can enjoy your freshly painted vehicle without the wait.</p>
</div>
</div>
<div className='nl:max-w-sm w-full rounded overflow-hidden shadow-lg border shadow-blue-200 px-2'>
  <div className=' flex flex-row'>
<div className='flex items-center justify-center'><h1 className='text-center text-xl p-2 text-gray-800 font-semibold'>Customer Service</h1></div>
  <div><FaHeadset className='text-sky-600 h-28 w-28 pX-4 py-2'/></div>
</div >
<hr className='text-blue-600 px-2'/>
 <div className='p-2 flex items-center justify-center'>
  <p className='text-justify font-mono p-2'>
  At AutoArt, our commitment to you goes beyond just providing high-quality vehicle painting services.
   We pride ourselves on delivering exceptional customer service from start to finish. Our knowledgeable and friendly team is always here to assist you, answer your questions, and ensure a seamless experience.
   Whether you need updates on your vehicle’s status or have specific requests, we are dedicated to meeting your needs with professionalism and care.
   Your satisfaction is our top priority.</p>
</div>
</div>
</div>

</div>

</div>
<div className="flex items-center justify-center space-x-4 p-4 nl:invisible">
        <Link to='/colorselection' className="hover:bg-violet-500  bg-violet-800 text-white font-normal py-2 px-4 rounded-lg">Explore</Link>
   </div>
     
   
  </div>
  )
}

export default Home
