import axios from 'axios'
import React from 'react'


const Pending = ({books, token}) => {

    const pendBooks = books.filter(item => item.flag === "send")

    const handleDelete = async (canid) =>{
        try{
         await axios.delete(`http://localhost:3001/api/user/cancelorder/${canid}`,  {
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
    <div className='flex flex-wrap'>
       
       
    {pendBooks.map(book => (

  
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
      <div className='flex items-center justify-center gap-10 pt-2'>
      <p>Vehicle No: {book.kl}</p>
      <p>Status: <span className='text-green-600'>{book.flag}</span></p>
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
  )
}

export default Pending
