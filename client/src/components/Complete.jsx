import React from 'react'

const Complete = ({books}) => {

  const com = books.filter(item => item.flag === "complete")
  return (
    <div className='flex flex-wrap'>
       
       
    {com.map(book => (

  
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
    </div>    
))}
</div>
  )
}

export default Complete
