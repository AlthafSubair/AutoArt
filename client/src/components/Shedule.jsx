import React from 'react'
import { Link } from 'react-router-dom'

const Shedule = ({books}) => {

    const Schbooks = books.filter(item => item.flag === "sheduled")
    const error = books.filter(item => item.flag === "error")

  return (
    <div className='flex flex-wrap'>

{error.map(book => (

      
<div key={book._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full border border-red-600 m-2'>
  

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
  <div className='flex items-center justify-center pt-2'>
  <p>Amount: {book.amount}</p>
 
  </div>
  <div className='flex items-center justify-center p-2'>
  <Link to={`/payment/${book._id}`} className='hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md'>Payment</Link>
 
</div>
<div className='flex items-center justify-center pt-2'>
  <p className="text-red-500 text-sm italic">Payment Failed! please retry or contact customer care.</p>
  </div></div>    
))}
       
       
        {Schbooks.map(book => (

      
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
          <p>Amount: {book.amount}</p>
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
        <Link to={`/payment/${book._id}`} className='hover:bg-[#eff3ee] hover:text-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded-md'>Payment</Link>
       
      </div></div>    
    ))}
    </div>

   
  )
}

export default Shedule
