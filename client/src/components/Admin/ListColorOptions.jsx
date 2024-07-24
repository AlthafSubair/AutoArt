import axios from '../../utilis/axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext';
import { useSnackbar } from 'notistack';




const ListColorOptions = ({color, setColor}) => {
  const { currentUser} = useContext(UserContext);
  

  const token = currentUser?.token;
  const { enqueueSnackbar } = useSnackbar();
  

  const handleDelete = async (id) =>{
    try{
     await axios.delete(`/admin/deletecolor/${id}`,  {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    });
    enqueueSnackbar('Color Option deleted', { variant:'success'})
    setColor(prevColor => prevColor.filter(c => c._id !== id))
      
  
    }catch(err){
      if (err.response && err.response.data && err.response.data.message) {
        enqueueSnackbar(err.response.data.message, {variant: 'error'});
      } else {
        enqueueSnackbar('Failed to add color, please try again', {variant: 'error'});
      }
    }
  
  }

  return (
    <div className='flex flex-wrap'>
       {
      color.map(color => (
      <div key={color._id} className='p-1 pt-3 pb-2 text-sm font-mono text-slate-800 rounded-md nl:w-3/12 sm:w-6/12  w-full'>
     
     <div >
       <div className='p-3 rounded-sm'>
    
    <img src={`http://localhost:3001/${color.image.replace(/\\/g, '/')}`} alt={color.image.replace(/\\/g, '/')} className='rounded-sm h-64 w-full'/>
</div>
<div className='flex items-center justify-center'>
    <h1 className='text-xl font-bold pb-3'>COLOR: {color.color}</h1>
</div>
<div className='flex items-center justify-center'>
    <h1 className='text-xl font-bold pb-3 gap-2'>Category: {color.category}</h1>
    
</div>
<div className='flex items-center justify-center'>
<h1 className='text-xl font-bold pb-3'>Model: {color.model}</h1> 
</div>
</div>
 
<div className='flex items-center justify-center gap-2 pb-4'>
    <Link to={`/editcolor/${color._id}`} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>Edit</Link>
    <button className='hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md' onClick={()=> handleDelete(color._id)}>Delete</button>
</div>
</div>
 ))
}
</div>
  )
}

export default ListColorOptions