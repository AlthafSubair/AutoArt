import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Pending = () => {
    const [enq, setEnq] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/api/admin/getenq')
        .then(response => {
          setEnq(response.data);
        })
        .catch(error => {
          console.error("Error react: ", error);
        });
    }, []);
  
  
  let i = 0
  return (
     <div>
    <div className='flex-wrap hidden nl:block'>
   <table className='min-w-full bg-white border border-gray-200 '>
     <thead>
     <tr>

       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>slno</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>COLOR</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>MODEL</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>CATEGORY</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>VEHICLE NO</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>TYPE</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>USERNAME</th>
       <th className='px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider'>ACTION</th>
     </tr>
     </thead>
     
{

enq.map(enq => (

<tbody key={enq._id}>
<tr >
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{++i}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.optionId.color}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.optionId.model}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.optionId.category}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.kl}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.paint}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'>{enq.userId.username}</td>
<td className='px-6 py-4 whitespace-no-wrap borser-b border-gray-200 uppercase'> <Link to={`/senq/${enq._id}`} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>View</Link></td>

</tr>
</tbody>
))
}

   </table>
 </div>
 
 <div className='visible nl:hidden'>
  

 <div className='flex items-center justify-center flex-col'>
       {
      enq.map(enq => (
      <div key={enq._id} className='bg-white shadow-md rounded gap-4 mb-2 w-full m-5 p-3'>
     
     <div >
     <div className='flex item-start justify-start pl-2'>
<h1 className='text-sm pb-3'>USERNAME: {enq.userId.username}</h1> 
</div>
      
<div className='flex item-start justify-start pl-2'>

    <h1 className='text-sm pb-3'>COLOR: {enq.optionId.color}</h1>
</div>
<div className='flex item-start justify-start pl-2'>
    <h1 className='text-sm pb-3 gap-2'>Category: {enq.optionId.category}</h1>
    
</div>
<div className='flex item-start justify-start pl-2'>
<h1 className='text-sm pb-3'>Model: {enq.optionId.model}</h1> 
</div>
<div className='flex item-start justify-start pl-2'>
<h1 className='text-sm pb-3'>TYPE: {enq.paint}</h1> 
</div>
</div>
 
<div className='flex items-center justify-center gap-2 pb-4'>
    <Link to={`/senq/${enq._id}`} className='hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'>view</Link>

</div>
</div>
 ))
}
</div>
 

 </div>
</div>
  )
}

export default Pending
