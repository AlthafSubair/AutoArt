import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/userContext'
import { useState } from 'react';
import axios from 'axios';


const EnquireForm = ({id}) => {
  const { currentUser} = useContext(UserContext);
  
  const [error, setError] = useState(null);


  const token = currentUser?.token;

  const userId = currentUser?.id;
  

  const [formData, setFormData] = useState({
    userid: userId,
    kl:'',
    paint: ''
  })
  

  const handleChange = (e) => {
    setFormData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }


 const handleSubmit = async (e) => {
  e.preventDefault()
 

  try {
    
    

    const response = await axios.post(`http://localhost:3001/api/user/enquiredetails/${id}`, formData,  {
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const res = response.data
    if(res){
     window.location.reload()
    }else{
      console.log("failed")
    }
    
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      setError(err.response.data.message)
    } else {
      setError('Registration failed, please try again')
    }
  }
}



  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">{error && <p className='text-red-700'>{error}</p>}</div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="kl">
       Vehicel No
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="kl" name='kl' pattern="^[A-Z]{2}\d{2}[A-Z]{0,2}\d{4}$" required type="text" placeholder='KL34DXXXX' onChange={handleChange} value={formData.kl}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="paint">
          Options
        </label>
      </div>
      <div className="md:w-2/3">
      <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="paint"
                name='paint'
                 value={formData.paint}
                type="text"
               
                onChange={handleChange}
              >
                <option value="">--select--</option >
                <option value="full">Full Painting</option>
                <option value="partial">partial Painting</option>
                <option value="touching">Touching</option>
        
              </select>
      </div>
    </div>
 
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
       BOOK NOW
      </button>
    </div>
  </div>
</form>
    </div>
  )
}

export default EnquireForm