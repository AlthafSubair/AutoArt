import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {MdOutlinePending, MdError, MdOutlineDoneAll} from 'react-icons/md'
import {FaCreditCard} from 'react-icons/fa'

const VerifyPayment = () => {
    const [item, setItem] = useState([])
    const [status, setStatus] = useState("pending");

    useEffect(()=>{
        const fetch = async () => {
         try{
           const res = await axios.get(`http://localhost:3001/api/admin/getpayment`)
         setItem(res.data)
         }catch(err){
           console.log(`error react ${err}`)
         }
        };
        fetch()
         },[])

         const pay = item.filter(item => item.EnquiryId.flag === "pending")
         const error = item.filter(item => item.EnquiryId.flag === "error")
         const complete = item.filter(item => item.EnquiryId.flag === "complete")

         const handleCancel = async (canid) =>{
          try{
           await axios.put(`http://localhost:3001/api/admin/cancelPayment/${canid}`);
         window.location.reload()
            
        
          }catch(error){
            console.log("error deleting color option", error)
          }
        
        }

        const handleVerify = async (canid) =>{
          try{
           await axios.put(`http://localhost:3001/api/admin/verifyPayment/${canid}`);
         window.location.reload()
            
        
          }catch(error){
            console.log("error deleting color option", error)
          }
        
        }

         console.log(item)
  return (
    <div className='min-h-screen'>

<div className='flex flex-row'>
  <div className='flex items-start justify-start w-2/6 m-6'><button className='text-green-800 ' onClick={()=>setStatus("error")}><div className='relative w-7 h-7'>
    <FaCreditCard className='text-black w-full h-full' />
    <MdError className='absolute top-0 right-0 text-red-500 w-3 h-3' />
    </div></button> </div>
  <div className='flex items-center justify-center w-2/6 m-6'><button className='text-green-800 '  onClick={()=>setStatus("pending")}><MdOutlinePending className='w-7 h-7  cursor-pointer' /> </button></div>
  <div className='flex items-end justify-end w-2/6 m-6'><button className='text-green-800 '  onClick={()=>setStatus("complete")}><MdOutlineDoneAll className='w-7 h-7 cursor-pointer' /></button></div>

</div>

{
  status === "pending" &&

      <div className='flex flex-wrap'>
       
       
       {
       
       
       pay.map(book => (

     
     <div key={book._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full'>
       <img 
         src={`http://localhost:3001/${book.image}`} 
         alt='PAY ON SERVICE'
         className='rounded-sm h-64 w-full' 
       />
       <div className='flex items-center justify-center'>
         <p>Username: {book.userId.username} </p>
         </div>
         <div className='flex items-center justify-center pt-2'>
         <p>Paint: {book.EnquiryId.paint}</p>
         </div>
         <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Vehicle No: {book.EnquiryId.kl}</p>
         <p>Status: <span className='text-green-600'>{book.EnquiryId.flag}</span></p>
       </div>
       
       <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Amount: {book.EnquiryId.amount}</p>
       </div>
       <div className='flex items-center justify-center p-2 gap-2'>
       <button onClick={()=>handleVerify(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>Verify</button>
       <button onClick={()=>handleCancel(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-blredue-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md'>Cancel</button>
     </div></div>    
   ))}
   </div>}
   

   {
  status === "error" &&

      <div className='flex flex-wrap'>
       
       
       {
       
       
       error.map(book => (

     
     <div key={book._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full'>
       <img 
         src={`http://localhost:3001/${book.image}`} 
         alt='PAY ON SERVICE'
         className='rounded-sm h-64 w-full' 
       />
       <div className='flex items-center justify-center'>
         <p>Username: {book.userId.username} </p>
         </div>
         <div className='flex items-center justify-center pt-2'>
         <p>Paint: {book.EnquiryId.paint}</p>
         </div>
         <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Vehicle No: {book.EnquiryId.kl}</p>
         <p>Status: <span className='text-green-600'>{book.EnquiryId.flag}</span></p>
       </div>
       
       <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Amount: {book.EnquiryId.amount}</p>
       </div>
       {/* <div className='flex items-center justify-center p-2 gap-2'>
       <button onClick={()=>handleVerify(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>Verify</button>
       <button onClick={()=>handleCancel(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-blredue-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md'>Cancel</button>
     </div> */}
     </div>    
   ))}
   </div>}

   {
  status === "complete" &&

      <div className='flex flex-wrap'>
       
       
       {
       
       
       complete.map(book => (

     
     <div key={book._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full'>
       <img 
         src={`http://localhost:3001/${book.image}`} 
         alt='PAY ON SERVICE'
         className='rounded-sm h-64 w-full' 
       />
       <div className='flex items-center justify-center'>
         <p>Username: {book.userId.username} </p>
         </div>
         <div className='flex items-center justify-center pt-2'>
         <p>Paint: {book.EnquiryId.paint}</p>
         </div>
         <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Vehicle No: {book.EnquiryId.kl}</p>
         <p>Status: <span className='text-green-600'>{book.EnquiryId.flag}</span></p>
       </div>
       
       <div className='flex items-center justify-center gap-10 pt-2'>
         <p>Amount: {book.EnquiryId.amount}</p>
       </div>
       {/* <div className='flex items-center justify-center p-2 gap-2'>
       <button onClick={()=>handleVerify(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>Verify</button>
       <button onClick={()=>handleCancel(book.EnquiryId._id)} className='hover:bg-[#eff3ee] hover:text-blredue-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md'>Cancel</button>
     </div> */}
     </div>    
   ))}
   </div>}
    </div>
  )
}

export default VerifyPayment
