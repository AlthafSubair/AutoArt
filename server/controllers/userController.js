import User from '../models/userModel.js';
import Color from '../models/colorModel.js';
import HttpError from "../models/errorModel.js";
import fs from 'fs'
import Contact from '../models/contactModel.js';
import Enquire from '../models/enquireModel.js';
import Fav from '../models/favModel.js';
import Payment from '../models/paymentModel.js';


const changeAvatar = async (req, res, next) => {
    try{

      const userId = req.params.id;
  
      
  
      if(req.file){
 
          const existing_profile = await User.findById(userId)
          const profile_path = existing_profile.avatar
        
         
  
          if (fs.existsSync(profile_path)) {
                      fs.unlinkSync(profile_path);
                    } 
                    
  
                    const newProfile = req.file.path;
                          const updatedColorimg = await User.findByIdAndUpdate(
                            userId,
                            { avatar: newProfile},
                            { new: true }
                          );
                
                          if(updatedColorimg){
                              res.status(200).json("updated thumbnail")
                          }
  
      }else{
        return next(new HttpError("insert an image"))
      }
  
  }catch (error) {
          return next(new HttpError(error))
      }
    
  }

  const getUser = async (req, res, next) => {

    try{
    const userId = req.params.id;
    const user = await User.findById(userId)

    if(!user){
        return next(new HttpError("failed"))
    }
    res.status(200).json(user)
    }catch (error) {
        return next(new HttpError(error))
    }

}

const getContact = async (req,res, next)=>{
  try{

    const id = req.params.id;
    const contact = await Contact.findOne({of:id});
    if(!contact){
      res.status(200).json('false')
    }else{
      res.status(200).json(contact)
    }

  }catch (error) {
    return next(new HttpError(error))
}
}

const updateContact = async (req, res, next) =>{
  try{

const {ph, whatsapp, address} = req.body;
const id = req.params.id;

if(!ph || !address || !id){
    
  return next(new HttpError("fill all fields"),422);
}

const updateontact = await Contact.findByIdAndUpdate(id, {ph, whatsapp, address}, {new: true})

if(updateontact){
  res.status(200).json("sucess")
}else{
  return next (new HttpError("error"),422)
}
  }catch(error){
    return next(new HttpError("catch error"),422)
  }
}

const contactDetails = async (req, res, next) => {
  try{

    const {ph, whatsapp, address} = req.body;
   
    const id = req.params.id;

    if(!ph || !address || !id){
    
      return next(new HttpError("fill all fields"),422);
    }
    const contactExists = await Contact.findOne({ of: id });
    if(contactExists){
      return next(new HttpError("Already added contact details please update"))
    }

    const contact = await Contact.create({of: id, ph, whatsapp, address})

    if(contact){
      res.status(200).json(contact)
    }else{
      return next(new HttpError("cant insert"),422)
    }

  }catch(error){
    return next(new HttpError("catch error"),422)
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

const enquireDetails = async (req, res, next) => {
  try{
const id = req.params.id;
const {userid, kl, paint} = req.body;

if(!userid || !kl || !paint){
  return next(new HttpError("fill all fields"),422);
}
const userEsixt = await User.findById(userid)

if(!userEsixt){
  return next(new HttpError("user not found"),422);
}

const flag = "send"
const enquire = await Enquire.create({userId: userid, optionId: id, kl, paint, flag})

if(!enquire){
  return next(new HttpError("failed"))
  }
  res.status(200).json(enquire)

  }catch (error) {
    return next(new HttpError(error))
}

}

const addFav = async (req, res, next) => {

  try{

    
    const {id,formData} = req.body;

    console.log(req.body)
   
    const existfav = await Fav.findOne({userId: formData, optionId: id})
    console.log(existfav)
    if(existfav){
      return next(new HttpError("already added"), 422)
      
    }
    const fav = await Fav.create({userId: formData, optionId: id})
    if(!fav){
      return next(new HttpError("failed"))
      }
      res.status(200).json(fav)

  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}

const getBooking = async (req, res , next) =>{
  try{

    const id = req.params.id;
    const book = await Enquire.find({userId:id}).populate('optionId');
    res.status(200).json(book)

  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}

const getFav = async (req, res , next) =>{
  try{

    const id = req.params.id;
    const getfav = await Fav.find({userId:id}).populate('optionId');
    res.status(200).json(getfav)

  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}

const delEnq = async(req,res,next) =>{
  try{

    const id = req.params.id;

    const delbook = await Enquire.findByIdAndDelete(id)

    res.status(200).json("sucess")

  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}
 
const unFav = async(req,res,next) =>{
  try{

    const id = req.params.id;

    const delfav = await Fav.findByIdAndDelete(id)

    res.status(200).json("sucess")

  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}

const paymentUser = async (req, res, next) =>{
  try{

    const id = req.params.id;
    const {uid} = req.body;

    if(!req.file){
      return next(new HttpError('fill all fiedls'), 422)
    }

    const image = req.file.path;


const pay = await Payment.create({userId: uid, EnquiryId: id , image: image})

if(pay){
  const flag = "pending"
  const update = await Enquire.findByIdAndUpdate(id,{flag: flag})
  res.status(200).json(pay)
}


  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}

const poD = async (req, res, next) =>{
  try{

    const id = req.params.id;
    console.log(req.body)
    const {uid} = req.body;
console.log(`${uid}`)
const pod = true;


const pay = await Payment.create({userId: uid, EnquiryId: id,pod: pod})

if(pay){
  const flag = "pending"
  const update = await Enquire.findByIdAndUpdate(id,{flag: flag})
  res.status(200).json(pay)
}


  }catch (error) {
    return next(new HttpError(`react: ${error}`))

}
}




  export {changeAvatar, getUser, contactDetails, getContact, updateContact, getColor, enquireDetails, addFav, getBooking, getFav, delEnq,unFav, paymentUser, poD}