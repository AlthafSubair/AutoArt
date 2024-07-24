import jwt from "jsonwebtoken";
import HttpError from "../models/errorModel.js"
import dotenv from 'dotenv';


dotenv.config();

const authMiddleware = async (req, res, next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization

    if(Authorization && Authorization.startsWith("Bearer")){
        const token = Authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECERT_KEY, (err, info) => {
            if(err){
                return next(new HttpError("Please Login!",403))
            }
            req.user = info
            next()
        })
    }else{
        return next(new HttpError("unauth, no",403))
    }
}

export default authMiddleware;