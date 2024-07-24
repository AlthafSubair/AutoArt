import mongoose, { Schema }  from "mongoose";

const contactSchema = mongoose.Schema(
    {
        of:{
            type: Schema.Types.ObjectId, 
            ref: "users"
        },
        ph: {
            type: String,
            required: true
          },
          whatsapp: {
            type: String,
            
          },
          address: {
            type: String,
            required: true
          },
    
    }, {timestamps: true}
);

const Contact = mongoose.model("contact", contactSchema)

export default Contact;