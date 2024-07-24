import { Schema } from "mongoose";
import mongoose from "mongoose";

const paySchema = mongoose.Schema(
    {
        userId:{
            type: Schema.Types.ObjectId, 
            ref: "users",
            required: true
        },
        EnquiryId:{
            type: Schema.Types.ObjectId, 
            ref: "enquire",
            required: true
        },
        image:{
            type: String  
        },
        pod:{
            type: Boolean,
            default: false
        }
        
    }
);
const Payment = mongoose.model("payment", paySchema);

export default Payment;