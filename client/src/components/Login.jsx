import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext, useUser } from '../context/userContext';
import { useSnackbar } from 'notistack';
import axios from '../utilis/axios';



export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const { currentUser} = useContext(UserContext);

  const token = currentUser?.token;
  const role = currentUser?.role;

 console.log(role)

  const handleChange = (e) => {
    setLoginData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

 
 
  const { login } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  console.log(loginData);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/login', loginData);
      const user = response.data;
      console.log(user);

      // Update user context with the logged-in user
      login(user);

      if (user.role === "user") {
        enqueueSnackbar('Logged in successfully', { variant: 'success' });
        navigate('/');
      } else {
        enqueueSnackbar('Logged in successfully', { variant: 'success' });
        navigate('/adminhome');
      }

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
       
        enqueueSnackbar(err.response.data.message, { variant: 'error' });
      } else {
      
        enqueueSnackbar('Login failed, please try again', { variant: 'error' });
      }
    }
  };

  useEffect(()=>{
    if(token){
      if(role === "admin"){
        navigate('adminhome')
      }else{
        navigate('/')
      }
    }
  }, [])

  
  return (
    <form onSubmit={handleLogin}>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required onChange={handleChange} placeholder="example@gmail.com" value={loginData.email} />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder="******************" onChange={handleChange} value={loginData.password}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
        <Link to={'/forgotpassword'} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};
