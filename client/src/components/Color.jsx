import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';

const Color = () => {
  const { currentUser} = useContext(UserContext);
  

  const userid = currentUser?.id;
  const [color, setColor] = useState([]);
  const [formData ,setFormdata] = useState(userid)
  
  
  const [error, setError] = useState(null);
 
  




  useEffect(() => {
    axios.get('http://localhost:3001/api/admin/getcolors')
      .then(response => {
        setColor(response.data);
      })
      .catch(error => {
        console.error("error: ", error);
      });
  }, []);

  // Group colors by category
  const groupedColors = color.reduce((acc, color) => {
    if (!acc[color.category]) {
      acc[color.category] = [];
    }
    acc[color.category].push(color);
    return acc;
  }, {});

  const handleFav = async(id) =>{
    try{
      console.log(id)
      const response =  await axios.post(`http://localhost:3001/api/user/addfav`, {formData, id})
    if(response){
      window.location.reload()
    }

    }catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Registration failed, please try again')
      }
    }
  }
  console.log(formData)
 

  return (
    <div className='flex flex-wrap'>
     
      {Object.keys(groupedColors).map(category => (
        <div key={category} className='w-full mb-4'>
          <h2 className='text-2xl font-bold mb-2 text-slate-800 pl-3'>{category}</h2>
          <div className='flex flex-wrap'> 
            {groupedColors[category].map(color => (
              <div key={color._id} className='flex flex-col bg-white shadow-md rounded gap-4 mb-2 w-full md:w-3/12'>
                <div>
                  <div className='p-3 rounded-sm'>
                    <img src={`http://localhost:3001/${color.image.replace(/\\/g, '/')}`} alt={color.image.replace(/\\/g, '/')} className='rounded-sm h-64 w-full' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-bold pb-3 text-slate-800'>{color.color}</h1>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link to={`/enquire/${color._id}`} className="hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-lg">Enquire</Link>
                  </div>
                  <div className='flex pl-3 pt-2'>
                    <h1 className='text-sm font-mono pb-2'>Model: {color.model}</h1>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700">#{color.category}</span>
                    
                    <span className="inline-block rounded-full text-sm font-semibold text-gray-700 ml-8">
                      
                        
                        <input type="text" name='uid' value={formData} hidden readOnly onChange={(e)=>setFormdata(e.target.value)}/>

                        
                        <button onClick={()=>handleFav(color._id)}><MdFavorite className='text-red-600 hover:text-red-900 h-5 w-5 cursor-pointer' /></button>
                  
                      
                      
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Color;
