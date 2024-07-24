import express from 'express';
import { login, registerUser } from '../controllers/authcontroller.js';

const authrouter = express.Router();


authrouter.post('/registration', registerUser )
authrouter.post('/login', login)

export default authrouter;