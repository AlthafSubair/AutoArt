import { Schema } from "mongoose";
import mongoose from "mongoose";

const enquireSchema = mongoose.Schema(
    {
        userId:{
            type: Schema.Types.ObjectId, 
            ref: "users",
            required: true
        },
        optionId:{
            type: Schema.Types.ObjectId, 
            ref: "color",
            required: true
        },
        kl:{
            type: String,
            required: true
        },
        paint:{
            type: String,
            required: true
        },
        date:{
            type: Date
        },
        amount:{
            type: String
        },
        flag:{
            type: String,
           
        }
    }
);
const Enquire = mongoose.model("enquire", enquireSchema);

export default Enquire;