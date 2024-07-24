import  { useState } from 'react'
import axios from '../utilis/axios';
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const Register = () => {

const [regData, setRegData] = useState({
  username:'',
  email:'',
  password: '',
  confirmpswd:''
})

const [error, setError] = useState(null)


const handleChange = (e) => {
  setRegData(prev => {
    return { ...prev, [e.target.name]: e.target.value }
  })
}

const registerUser = async (e) => {
  e.preventDefault()

  try {
    const response = await axios.post('/auth/registration', regData)
    const newUser = response.data
    console.log(newUser)
    if (!newUser) {
      setError("Couldn't register user, please try again")
    } else {
      toast.success(`User ${newUser} registered successfully!`)
      window.location.reload();
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
    <div> <form  onSubmit={registerUser}>
    <div className="mb-4">
    <div className="mb-4">{error && <p className='text-red-700'>{error}</p>}</div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" placeholder="Username" pattern="[a-zA-Z0-9._]{3,16}" required onChange={handleChange} value={regData.username}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
       Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="example@gmail.com" required onChange={handleChange} value={regData.email} />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onChange={handleChange} value={regData.password} />
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpswd">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpswd" type="password" name="confirmpswd" placeholder="******************" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onChange={handleChange} value={regData.confirmpswd} />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20" type="submit">
        Sign Up
      </button>
      
    </div>
  </form>
</div>
  )
}

export default Register