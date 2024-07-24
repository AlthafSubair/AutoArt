import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Database connected")
    }catch(error){
console.log(`EORROR: ${error.message}`)
process.exit(1)
    }
};

export default connectDB;