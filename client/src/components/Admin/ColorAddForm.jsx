import  { useContext, useState } from 'react'
import axios from '../../utilis/axios';
import { UserContext } from '../../context/userContext';
import { useSnackbar } from 'notistack';


const ColorAddForm = () => {
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [model, setModel] = useState('');
 
  const { currentUser} = useContext(UserContext);

  const token = currentUser?.token;

   

  const { enqueueSnackbar } = useSnackbar();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('color', color);
      formData.append('category', category);
      formData.append('model', model);

     
const config = {
  headers: {
    'Content-Type' : 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }
}

      const response = await axios.post('/admin/addcolor', formData, config);

      console.log(response.data)
if(response.data){

enqueueSnackbar("Color added successfully", { variant: 'success' })

}
     
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        enqueueSnackbar(err.response.data.message, { variant: 'error' });
      } else {
        enqueueSnackbar('Failed to add color, please try again', { variant: 'error' });
      }
    }
  };

  return (
    <div>
      
         <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image">
          Image
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="image" name='image' type="file" required onChange={e => setImage(e.target.files[0])} accept='png, jpg, jpeg'/>
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="color">
          Color
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="color" name='color' pattern="[A-Za-z]+" required type="text" placeholder="rg: RED" value={color} onChange={e => setColor(e.target.value)}/>
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
                value={category}
                type="text"
                required
                onChange={e => setCategory(e.target.value)}
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
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="model" name='model' type="text" placeholder="rg: RED" pattern="[A-Za-z]+" required value={model} onChange={e => setModel(e.target.value)}/>
      </div>
    </div>

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        ADD
        </button>
      </div>
    </div>
  </form>
    </div>
  )
}

export default ColorAddForm