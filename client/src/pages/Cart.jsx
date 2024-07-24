import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import {MdOutlinePending, MdOutlineDoneAll} from 'react-icons/md'
import {GrSchedule} from 'react-icons/gr'
import Shedule from '../components/Shedule'
import Pending from '../components/Pending'
import Complete from '../components/Complete'

const Cart = () => {
  const [books, setBooks] = useState([])
  const { currentUser } = useContext(UserContext)
  const id = currentUser?.id
  const token = currentUser?.token

  const [status, setStatus] = useState("shedule");

  console.log(status)

  const navigate = useNavigate()

  useEffect(()=>{

    if(!token){
      navigate('/auth')
    }
  }, [])

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/api/user/getbook/${id}`)
        .then(response => {
          setBooks(response.data)
        })
        .catch(error => {
          console.log("react", error)
        })
    }
  }, [id])

 

  

  return (
    <div className='min-h-screen '>
      <div className='flex items-center justify-center'>
        <h1 className='text-2xl text-slate-700 font-semibold p-3'>My BOOKING`S</h1>
      </div>

<div className='flex flex-row'>
  <div className='flex items-start justify-start w-2/6 m-6'><button className='text-green-800 ' onClick={()=>setStatus("pending")}><MdOutlinePending className='w-7 h-7  cursor-pointer'/></button> </div>
  <div className='flex items-center justify-center w-2/6 m-6'><button className='text-green-800 '  onClick={()=>setStatus("shedule")}><GrSchedule className='w-7 h-7  cursor-pointer' /> </button></div>
  <div className='flex items-end justify-end w-2/6 m-6'><button className='text-green-800 '  onClick={()=>setStatus("done")}><MdOutlineDoneAll className='w-7 h-7 cursor-pointer' /></button></div>

</div>


    <div className=''>



      {
        status === "shedule" && <Shedule books={books}/>
      }
      
      {
        status === "pending" && <Pending books={books} token={token}/>
      }
      
      {
        status === "done" && <Complete books={books}/>
      }
      
      
     
    </div>
    </div>
  )
}

export default Cart
