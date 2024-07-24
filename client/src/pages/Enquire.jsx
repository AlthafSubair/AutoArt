import React, { useEffect, useState } from 'react'
import EnquirItem from '../components/EnquirItem'
import EnquireForm from '../components/EnquireForm'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Enquire = () => {

const [item, setItem] = useState({})
const { id } = useParams();


useEffect(()=>{
axios.get(`http://localhost:3001/api/user/getcolor/${id}`)
.then(response => {
  setItem(response.data);
})
.catch(error => {
  console.error('error:', error);
});
},[])

  return (
    <div>
       <div className='flex items-center justify-center p-4'><h3 className='text-2xl font-bold text-slate-800'>BOOk <span className='font-chiller text-red-600 text-4xl'>C</span>
            <span className='font-chiller text-green-600 text-4xl'>O</span>
            <span className='font-chiller text-yellow-600 text-4xl'>l</span>
            <span className='font-chiller text-blue-600 text-4xl'>O</span>
            <span className='font-chiller text-red-600 text-4xl'>R</span> OPTIONS</h3></div>
    <div className='flex flex-row items-center justify-center w-full mx-2 my-16'>
<div className='flex w-1/2'>
        <EnquirItem id={item._id} image={item.image} color={item.color} cat={item.category} model={item.model}/>
        </div>
        <div className='flex w-1/2'>
        <EnquireForm id={item._id}/>
        </div>
       
  
    </div>
    </div>
  )
}

export default Enquire