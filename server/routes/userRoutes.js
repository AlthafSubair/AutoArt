import express from 'express'
import multer from 'multer'
import path from 'path'
import { addFav, changeAvatar, contactDetails, delEnq, enquireDetails, getBooking, getColor, getContact, getFav, getUser, paymentUser, poD, unFav, updateContact } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'avatar/')
    },
    filename: (req, file, cb) =>{

        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const userRouter = express.Router()

userRouter.patch('/profile/changeAvatar/:id',authMiddleware,upload.single('avatar'), changeAvatar)
userRouter.get('/getuser/:id', getUser)
userRouter.post('/contactdetails/:id', contactDetails)
userRouter.get('/getcontact/:id', getContact)
userRouter.put('/updatecontact/:id', updateContact)
userRouter.get('/getcolor/:id', getColor)
userRouter.post('/enquiredetails/:id', authMiddleware, enquireDetails)
userRouter.post('/addfav', addFav)
userRouter.get('/getbook/:id', getBooking)
userRouter.get('/getfav/:id', getFav)
userRouter.delete('/cancelorder/:id', authMiddleware, delEnq)
userRouter.delete('/unfav/:id', authMiddleware, unFav)
userRouter.post('/payment/:id',upload.single('image'), paymentUser )
userRouter.post('/paymentbypod/:id', poD )

export default userRouter;