import { Schema } from "mongoose";
import mongoose from "mongoose";

const favSchema = mongoose.Schema(
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
        
    }
);
const Fav = mongoose.model("fav", favSchema);

export default Fav;