import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pending from '../../components/Admin/Pending';
import Ongoing from '../../components/Admin/Ongoing';
import Complete from '../../components/Admin/Complete.jsx';

const AdminEnquire = () => {

  const [status, setStatus] = useState("pending")


  const handleOngoing = () =>{
    setStatus("ongoing")
  }
  const handleComplete = () =>{
    setStatus("complete")
  }
 
  return (
    <div className='min-h-screen min-w-full'>

      <div className='flex flex-wrap'>
        <div className='w-4/12 flex items-center justify-center my-6'>
<button className='uppercase hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold md:py-2 md:px-4 py-1 px-1 rounded-md' onClick={()=> setStatus("pending")}>PENDING</button>
        </div>
        <div className='w-4/12 flex items-center justify-center my-6'>
<button className='uppercase hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold md:py-2 md:px-4 py-1 px-1 rounded-md' onClick={handleOngoing}>ONGOING</button>
        </div>
        <div className='w-4/12 flex items-center justify-center my-6'>
<button className='uppercase hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold md:py-2 md:px-4 py-1 px-1 rounded-md' onClick={handleComplete}>COMPLETE</button>
        </div>

      </div>
{
  status === "pending" &&  <Pending />
}
{
  status === "ongoing" &&  <Ongoing />
}
{
  status === "complete" &&  <Complete />
}    
 
   
    </div>
  );
};

export default AdminEnquire;