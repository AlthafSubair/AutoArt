import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {
  const [books, setBooks] = useState([])
  const { currentUser } = useContext(UserContext)
  const id = currentUser?.id
  const token = currentUser?.token

  const navigate = useNavigate()

  useEffect(()=>{

    if(!token){
      navigate('/auth')
    }
  }, [])

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/api/user/getfav/${id}`)
        .then(response => {
          setBooks(response.data)
        })
        .catch(error => {
          console.log("react", error)
        })
    }
  }, [id])

  const handleDelete = async (canid) =>{
    try{
     await axios.delete(`http://localhost:3001/api/user/unfav/${canid}`,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
   window.location.reload()
      
  
    }catch(error){
      console.log("error deleting color option", error)
    }
  
  }
  return (
    <div className='min-h-screen '>
    <div className='flex items-center justify-center'>
      <h1 className='text-2xl text-slate-700 font-semibold p-3'>Favourite`s</h1>
    </div>
    <div className='flex flex-wrap'>
      
      {books.map(book => (
      
        <div key={book._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full'>
          <img 
            src={`http://localhost:3001/${book.optionId.image}`} 
            alt={book.optionId.color} 
            className='rounded-sm h-64 w-full' 
          />
          <div className='flex items-center justify-center'>
            <p>Color: {book.optionId.color}</p>
            </div>
            <div className='flex items-center justify-center pt-2'>
            <p>Paint: {book.paint}</p>
            </div>
            <div className='flex items-center justify-center pt-2'>
            <p>Vehicle No: {book.kl}</p>
          </div>
          
          <div className='flex items-center justify-center gap-10 pt-2'>
            <p>Model: {book.optionId.model}</p>
            <p className=''>Category: {book.optionId.category}</p>
          </div>
          <div className='flex items-center justify-center p-2'>
          <button className='hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md' onClick={()=> handleDelete(book._id)}>cancel</button>
        </div></div>    
      ))}
    </div>
    </div>
  )
}

export default Favourites
