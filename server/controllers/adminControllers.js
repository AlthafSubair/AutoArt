import Color from "../models/colorModel.js";
import HttpError from "../models/errorModel.js";
import fs from 'fs'
import Enqire from "../models/enquireModel.js"
import Contact from "../models/contactModel.js";
import Payment from "../models/paymentModel.js";


const addColor = async (req, res, next) =>{
    try{
const {color, category, model} = req.body;


        if(!color || !category || !model){
            return next(new HttpError("Fill all fields", 422))
        }

        if (!req.file) {
            return next(new HttpError("insert a image", 422))
            
        }
        const imagepath = req.file.path;
      

        const newIns = await Color.create({image: imagepath, color, category, model})
        

        if(!newIns){
            return next(new HttpError("cannot insert"))
        }

        res.status(201).json(newIns)

    }catch (error) {
        return next(new HttpError("failed to add color option", 422));
      }
}

const getColors = async (req, res, next) =>{
    try{

        const colors = await Color.find().sort({updatedAt: -1})
        res.status(200).json(colors)

    }catch(error){
        return next(new HttpError("failed to fetch color option", 422));
    }
}

const getColor = async (req, res, next) => {

    try{
    const colorId = req.params.id;
    const color = await Color.findById(colorId)

    if(!color){
        return next(new HttpError("failed"))
    }
    res.status(200).json(color)
    }catch (error) {
        return next(new HttpError(error))
    }

}

const deleteColor = async (req, res, next) => {
    try{
  
      const colorId = req.params.id;
  
      if(!colorId){
          return next(new HttpError("post unavailable"))
      }
  
      const color = await Color.findById(colorId);
      const filepath = color.image;
      if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        } 
        else {
          console.log("no file")
        }
        const del = await Color.findByIdAndDelete(colorId)
       
  
        if(del){
          res.json("success")
        }
  
      
  
    }catch (error) {
      return next(new HttpError(error))
  }
  }

  const editColor = async (req, res, next) => {
    try{
  
      const colorId = req.params.id;
  
      const { color, category, model } = req.body;
  
  
      if(!color || !category || !model ) {
         
          return next(new HttpError("Fill all fields", 422))
      }
  
  
      if(!req.file){
          const updateColor = await Color.findByIdAndUpdate(colorId, {color, category, model}, {new: true})
          if(updateColor){
              res.status(200).json("updated")
          }
      }else{
  
          const oldColor = await Color.findById(colorId)
          const imagepath = oldColor.image
          
  
          if (fs.existsSync(imagepath)) {
                      fs.unlinkSync(imagepath);
                    } 
                    else {
                      return next(new HttpError("cant delete"))
                    }
  
                    const newimage = req.file.path;
                          const updatedColorimg = await Color.findByIdAndUpdate(
                            colorId,
                            { image: newimage,color, category, model },
                            { new: true }
                          );
                
                          if(updatedColorimg){
                              res.status(200).json("updated thumbnail")
                          }
  
      }
  
  }catch (error) {
          return next(new HttpError(error))
      }
    
  }

  
  const getEnquire = async (req, res, next) => {
    try {
      const flag = "send"
        const getenq = await Enqire.find({flag: flag})
            .populate('userId')
            .populate('optionId')
            .sort({ updatedAt: -1 });

        // Extract user IDs
        const userIds = getenq.map(item => item.userId._id);

       

        // Fetch contact details
        const contactEnq = await Contact.find({ of: { $in: userIds } });

        // Combine enquire data with contact data
        const combinedData = getenq.map(enq => {
            const contact = contactEnq.find(contact => contact.of.equals(enq.userId._id));
            return {
                ...enq.toObject(),
                contact
            };
        });
        

        res.status(200).json(combinedData);
    } catch (error) {
        return next(new HttpError(error.message));
    }
};
const getEnquireByon = async (req, res, next) => {
    try {
      const flag = "sheduled"
        const getenq = await Enqire.find({flag: flag})
            .populate('userId')
            .populate('optionId')
            .sort({ updatedAt: -1 });

        // Extract user IDs
        const userIds = getenq.map(item => item.userId._id);


        // Fetch contact details
        const contactEnq = await Contact.find({ of: { $in: userIds } });

        // Combine enquire data with contact data
        const combinedData = getenq.map(enq => {
            const contact = contactEnq.find(contact => contact.of.equals(enq.userId._id));
            return {
                ...enq.toObject(),
                contact
            };
        });
        

        res.status(200).json(combinedData);
    } catch (error) {
        return next(new HttpError(error.message));
    }
};

const getEnquireBycom = async (req, res, next) => {
    try {

      const flag = "complete"
        const getenq = await Enqire.find({flag: flag})
            .populate('userId')
            .populate('optionId')
            .sort({ updatedAt: -1 });

        // Extract user IDs
        const userIds = getenq.map(item => item.userId._id);
        console.log(userIds)

        // Fetch contact details
        const contactEnq = await Contact.find({ of: { $in: userIds } });

        // Combine enquire data with contact data
        const combinedData = getenq.map(enq => {
            const contact = contactEnq.find(contact => contact.of.equals(enq.userId._id));
            return {
                ...enq.toObject(),
                contact
            };
          
        });
        
        console.log(combinedData)
        res.status(200).json(combinedData);
    } catch (error) {
        return next(new HttpError(error.message));
    }
};




const getEnquirebyId = async (req, res, next) => {
    try {

        const id = req.params.id;
      
        const getenq = await Enqire.findById(id)
            .populate('userId')
            .populate('optionId')
            .sort({ updatedAt: -1 });

        // Extract user IDs
        const userIds = getenq.userId._id;

        // Fetch contact details
        const contactEnq = await Contact.find({ of: { $in: userIds } });

        // Combine enquire data with contact data
       const combinedData = {
        ...getenq.toObject(),
        contactEnq
       }
        

        res.status(200).json(combinedData);
    } catch (error) {
        return next(new HttpError(error.message));
    }
};


const shedEnq = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { amount, date } = req.body;

        const flag = "sheduled";

        const sch = await Enqire.findByIdAndUpdate(id, { amount, date, flag }, { new: true });

        if (!sch) {
            return res.status(404).json({ message: 'Enquiry not found' });
        }

        res.status(200).json(sch);

    } catch (error) {
        return next(new HttpError(error.message));
    }
};

const getPayment = async(req, res, next)=>{
    try{
       

        const getPay = await Payment.find()
        .populate('userId')
        .populate('EnquiryId')
        .sort({ updatedAt: -1 });

        if(getPay){
            res.status(200).json(getPay)
        }

    }catch (error) {
        return next(new HttpError(error.message));
    }
}

const verifyPay = async(req,res,next) =>
{
    try{
        const id = req.params.id;
        const flag = "complete" 
   
        const getPay = await Enqire.findByIdAndUpdate(id,{flag: flag}, { new: true })

        if(getPay){
            res.status(200).json(getPay)
        }



    }catch (error) {
        return next(new HttpError(error.message));
    }
}

const cancelPay = async(req,res,next) =>
{
    try{
  
        const id = req.params.id;
        const flag = "error" 
   
        const getPay = await Enqire.findByIdAndUpdate(id,{flag: flag}, { new: true })

        if(getPay){
            res.status(200).json(getPay)
        }
       




    }catch (error) {
        return next(new HttpError(error.message));
    }
}



export {addColor, getColors, deleteColor, getColor, editColor, getEnquire, getEnquirebyId, shedEnq, getEnquireByon, getEnquireBycom, getPayment, verifyPay, cancelPay}
