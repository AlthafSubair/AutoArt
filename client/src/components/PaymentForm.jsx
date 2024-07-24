import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'


const PaymentForm = () => {
const [file, setFile] = useState(null)
const { currentUser } = useContext(UserContext)
 const cid = currentUser?.id
 const token = currentUser?.token
const [uid, setuid] = useState(cid)
const { id } = useParams();

const handleFileChane = (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('uid', uid)

    try {
      const response = await axios.post(`http://localhost:3001/api/user/payment/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log('Avatar uploaded successfully:', response.data);
      if(response){
        window.location.reload()
      }
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };
console.log(file)

  return (
    <div><div className="max-w-sm rounded overflow-hidden shadow-lg">

    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">AutoArt</div>
      <p className="text-gray-700 text-base">
       Choosing AutoArt for your vehicle's painting ensures top-quality service and expertise.
       They use premium materials and advanced techniques for a flawless finish.<br/>
       <br/>To verify your transaction, please upload a screenshot of your completed payment.
       This is essential for confirmation and to proceed with your service.
      </p>
    </div>

    <form className="w-full max-w-sm p-10" onSubmit={handleSubmit}>
  <div className="flex items-center border-b  border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="file" required onChange={handleFileChane}/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
     Pay
    </button>
    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" >
      Cancel
    </button>
  </div>
</form>

<p className="text-red-500 text-sm italic p-2">Payment will be verified in 24hrs.</p>
    
  </div>
  </div>
  )
}

export default PaymentForm