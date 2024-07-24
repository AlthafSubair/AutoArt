import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {LuCamera} from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom';
import default_avatar from '/user.png';
import ProDetails from '../components/ProDetails';
import EditProfile from '../components/EditProfile';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const Profile = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState({});
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const ext = contact?._id
  const { currentUser } = useContext(UserContext)
 
  const token = currentUser?.token
  const uid = currentUser?.id


  
  const [error, setError] = useState(null);
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a preview URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const response = await axios.patch(`http://localhost:3001/api/user/profile/changeAvatar/${id}`, formData, {
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

  useEffect(() => {
    axios.get(`http://localhost:3001/api/user/getuser/${id}`)
      .then(response => {
        setChangeAvatar(response.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, [id]);
console.log(contact)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/user/getcontact/${id}`)
      .then(response => {
        setContact(response.data);
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message)
        } else {
          setError('Registration failed, please try again')
        }
      });
  }, [id]);

 

  const navigate = useNavigate()

  useEffect(()=>{

    if(!token){
      navigate('/auth')
    }
  }, [])
  useEffect(()=>{

    if(uid != id){
      navigate('/auth')
    }
  }, [])
  const avatarPath = changeAvatar.avatar ? `http://localhost:3001/${changeAvatar.avatar.replace(/\\/g, '/')}` : default_avatar;

  return (
    <div className='min-h-screen'>
      <div className="flex justify-center items-center pt-6">
        <h1 className='text-2xl font-black text-gray-700'>{changeAvatar?.username}</h1></div>
      <div className="flex justify-center items-center">
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        
          <div className='static'>
          <img src={previewUrl || avatarPath} alt="Avatar" className="h-48 w-48 mt-3 p-5 rounded-full" />
          <div className='absolute nl:top-64 ml-32 top-72 -mt-3 nl:-mt-0'>
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <LuCamera className="text-4xl transition duration-300 text-green-700 hover:text-green-400 h-8 w-8 cursor-pointer bg-black p-1 rounded-full" />
          </label>
          </div>
          </div>
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            onChange={handleFileChange}
          />

<div className="mb-4">{error && <p className='text-red-700'>{error}</p>}</div>
          {file && (
            <button
              type="submit"
              className="px-4 py-2 bg-transparent shadow-lg border-gray-300  border text-slate-900 rounded-lg hover:bg-gray-400 transition duration-300 pb-2"
            >
              Upload Avatar
            </button>
          )}
        </form>

      </div>

      <div className='flex items-center justify-center p-2'>

        {
          ext? (<EditProfile ph={contact?.ph} whatsapp={contact?.whatsapp} address={contact?.address} id={ext}/>):(<ProDetails id={id}/>)
        }
          
         
        </div>

    </div>
  );
}

export default Profile;

