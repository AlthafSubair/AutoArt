import React, { useState } from 'react'
import Gpay from '../components/Gpay.jsx'
import PaymentForm from '../components/PaymentForm.jsx'
import { useContext } from 'react'
import { UserContext } from '../context/userContext.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Payment = () => {
  const { currentUser } = useContext(UserContext)
 


 const cid = currentUser?.id
 const token = currentUser?.token
const [uid, setuid] = useState({
  uid: cid
})
const { id } = useParams();


const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('uid', uid)

  console.log(formData)

  try {
    console.log(formData)
    const response = await axios.post(`http://localhost:3001/api/user/paymentbypod/${id}`, uid);
    console.log(formData)
    if(response){
      window.location.reload()
    }
  } catch (error) {
    console.error('Error uploading avatar:', error);
  }
};

  return (
    <div className='min-h-screen'>
            
    <div className='flex items-center justify-center p-4'><h3 className='sm:text-2xl text-sm font-bold text-slate-800'>PAYMENT</h3></div>

<div className='flex flex-row'>
  <div className='w-1/2 flex justify-center items-center'> <Gpay/></div>
  <div className='w-1/2 flex justify-center items-center'><PaymentForm /></div>
</div>

     <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='uid' readOnly hidden value={uid} />
        <button  className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='submit'>Pay On Service</button>
      </form>
      
     </div>
    </div>
  )
}

export default Payment
