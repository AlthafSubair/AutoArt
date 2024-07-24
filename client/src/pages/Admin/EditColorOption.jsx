import React, { useState, useEffect } from 'react';
import axios from '../../utilis/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { useSnackbar } from 'notistack';


const EditColorOption = () => {
  const [image, setImage] = useState(null);
 
  const [data, setData] = useState({ image: '', color: '', category: '', model:'' });
  const { id } = useParams();
  const { currentUser} = useContext(UserContext);

  const token = currentUser?.token;
const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    axios.get(`/admin/getcolor/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevColor) => ({ ...prevColor, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('color', data.color);
      formData.append('category', data.category);
      formData.append('model', data.model);

      const response = await axios.put(`/admin/editcolor/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });

     
      if (response.data) {
        enqueueSnackbar("Color edited successfully", {variant: 'success'})
        navigate('/addcolor')
      }

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        enqueueSnackbar(err.response.data.message, {variant: 'error'});
      } else {
        enqueueSnackbar('Failed to add color, please try again', {variant: 'error'});
      }
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center p-4'>
        <h3 className='text-2xl font-bold text-slate-800'>
          EDIT <span className='font-chiller text-red-600 text-4xl'>C</span>
          <span className='font-chiller text-green-600 text-4xl'>O</span>
          <span className='font-chiller text-yellow-600 text-4xl'>L</span>
          <span className='font-chiller text-blue-600 text-4xl'>O</span>
          <span className='font-chiller text-red-600 text-4xl'>R</span> OPTIONS
        </h3>
      </div>

      <div className='flex items-center justify-center '>
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Current Image
        </label>
        <img src={`http://localhost:3001/${data.image}`} alt="image" className='rounded-sm h-44 w-2/12' />
      </div>

      <div className='flex items-center justify-center p-4'>
        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image">
                Image
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="image"
                name='image'
                type="file"
                accept='image/png, image/jpg, image/jpeg'
                onChange={e => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
                Color
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="color"
                name='color'
                value={data.color}
                type="text"
                placeholder="e.g.: RED"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                Category
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="category"
                name='category'
                required
                value={data.category}
                type="text"
                placeholder="e.g.: RED"
                onChange={handleChange}
              >
                <option value="">--select--</option >
                <option value="Auto">Three Wheller</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Heavy">Heavy Loders</option>
              </select>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="model">
                Model
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="model"
                name='model'
                value={data.model}
                type="text"
                required
                placeholder="e.g.: RED"
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditColorOption;
