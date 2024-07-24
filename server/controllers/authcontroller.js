import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import HttpError from '../models/errorModel.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config()

const registerUser = async (req, res, next) => {
 
  try {
    const { username, email, password, confirmpswd, roleCode } = req.body;

    if (!username || !email || !password || !confirmpswd) {
      return next(new HttpError("Please Fill all fields.", 422));
    }

    const lowerEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: lowerEmail });
    
    if (emailExists) {
      return next(new HttpError("Email already exists. Please login.", 422));
    }

    if ((password.trim()).length < 6) {
      return next(new HttpError("Password should have at least 6 characters.", 422));
    }

    if (password !== confirmpswd) {
      return next(new HttpError("Passwords do not match.", 422));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Determine the role based on a roleCode or other condition
    let role = "user"
if(roleCode){
    if (roleCode && roleCode === process.env.ADMIN_CODE) {
      role = "admin";
    }else{
      return next(new HttpError("Rolecode is incorrect.", 422));
    }
}

      
    const newUser = await User.create({ username, email: lowerEmail, password: hashedPassword, role });
    res.status(201).json(`User ${newUser.username} registered successfully`);
  
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
}

const login = async (req, res, next) =>{
try{

  const {email, password} = req.body;


  if(!email && !password){
    return next(new HttpError("Please fill all fields.", 422));
  }

  const user = await User.findOne({email: email})
  

  if(!user){
    return next(new HttpError("User not found, Please Register",422))
}

const comparePassword = await bcrypt.compare(password, user.password)

if(!comparePassword){
    return next(new HttpError("Incorrect Password",422))
}


const {_id:id, username, role} = user;

const token = jwt.sign({id, username}, process.env.JWT_SECERT_KEY, {expiresIn: '1d'})

res.status(200).json({token, id, username, role})


}catch(error){
return next(new HttpError("Login Failed", 422))
}
}


export { registerUser, login };
