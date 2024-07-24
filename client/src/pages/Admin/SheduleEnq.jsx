
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import default_avatar from '/user.png'
import SchForm from '../../components/SchForm';

const SheduleEnq = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null)
  const [iscnt, setCnt] = useState(false)
  const [issch, setSch] = useState(false)

 
 

  useEffect(()=>{
   const fetch = async () => {
    try{
      const res = await axios.get(`http://localhost:3001/api/admin/getenqid/${id}`)
    setItem(res.data)
    }catch(err){
      console.log(`error react ${err}`)
    }
   };
   fetch()
    },[id])
    
    const avatarPath = item?.userId?.avatar ? `http://localhost:3001/${item?.userId?.avatar}` : default_avatar;
    const imagePath = item?.optionId?.image ? `http://localhost:3001/${item?.optionId?.image}` : "error";
   

  return (
    <div className='min-h-screen flex items-center justify-center my-auto'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full h-60" src={imagePath} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
   
    
    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
       COLOR
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="color" type="text" value={item?.optionId?.color || ''} readOnly/>
    </div>
    </div>
    
    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="kl">
       VEHICLE NO
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="kl" type="text" value={item?.kl || ''} readOnly/>
    </div>
    </div>

    <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="type">
       TYPE
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="type" type="text" value={item?.paint || ''} readOnly/>
    </div>
    </div>

  </div>

  {
  issch && (<div>
<SchForm setSch = {setSch} issch = {issch} id={id}/>

  </div>)
}
{
  !issch && item?.flag === "send" && (
<div className='flex items-center justify-center'>
<button onClick={()=> setSch(!issch)} className='uppercase hover:bg-[#eff3ee] hover:text-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded-md'>Shedule</button>
</div>)
}



    

  
  
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"># {item?.optionId?.category}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"># {item?.optionId?.model}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"># AutoArt</span>
  </div>

 <button onClick={()=>setCnt(!iscnt)}> <div className="flex items-center p-2 pl-6">
      <img className="w-12 h-12 rounded-full mr-4" src={avatarPath} alt={item?.userId?.username}/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none"> {item?.userId?.username}</p>
      </div>
    </div></button>

    {
      iscnt && (

        
        <div>

<div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="ph">
       PHONE
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="ph" type="text" value={item?.contactEnq[0]?.ph} readOnly/>
    </div>
    </div>

    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="mail">
       Mail
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="mail" type="text" value={item?.userId?.email} readOnly/>
    </div>
    </div>

       <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="type">
      ADDRESS
      </label>
    </div>
    <div className="md:w-2/3">
        <textarea  cols="30" rows="4" readOnly  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">{
          item?.contactEnq[0]?.address
        }</textarea> </div>
      </div> </div>)
    }

</div>
    </div>
  )
}

export default SheduleEnq
