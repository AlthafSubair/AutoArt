import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const ProDetails = ({id}) => {
  const [formData, setFormData] = useState({
    ph: '',
    whatsapp: '',
    address: ''
  })

  
  
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      
      console.log(formData)
      const response = await axios.post(`http://localhost:3001/api/user/contactdetails/${id}`, formData)
      const res = response.data
      if(res){
       console.log("sucess");
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

  const handleChange = (e) => {
    setFormData(prev =>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  return (
    <div>
      
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">{error && <p className='text-red-700'>{error}</p>}</div>
        <h1 className='text-center p-2 m-2 text-xl font-black text-gray-700 uppercase tracking-wide'>Contact Details</h1>
      <div className="flex flex-wrap -mx-3 mb-6 mt-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ph">
            Phone No
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="ph" name='ph' type="tel" placeholder="+91  9192****90" pattern="[6-9]{1}[0-9]{9}" required onChange={handleChange} value={formData.ph}/>
          
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="whatsapp" name='whatsapp'>
          Whatsapp No
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="whatsapp" name='whatsapp' type="tel" placeholder="+91  9192****90" pattern="[6-9]{1}[0-9]{9}" required onChange={handleChange} value={formData.whatsapp}/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
          Address
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" name='address' pattern="[A-Za-z0-9\s,.-/]+" required onChange={handleChange} value={formData.address}></textarea>
         
        </div>
      </div>
      
        <div className="w-full px-3 mb-6 flex items-center justify-center mt-6">
          <button className='bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-lg' type='submit'>Submit</button>
        </div>
     
    </form>
    </div>
  )
}

export default ProDetails