import express from 'express'
import { addColor, cancelPay, deleteColor, editColor, getColor, getColors, getEnquire, getEnquireBycom, getEnquireByon, getEnquirebyId, getPayment, shedEnq, verifyPay } from '../controllers/adminControllers.js';
import multer from 'multer'
import path from 'path'
import authMiddleware from '../middlewares/authMiddleware.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) =>{

        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const adminRouter = express.Router()

adminRouter.post('/addcolor', authMiddleware, upload.single('image'), addColor)
adminRouter.get('/getcolors', getColors)
adminRouter.delete('/deletecolor/:id',authMiddleware, deleteColor)
adminRouter.get('/getcolor/:id', getColor)
adminRouter.put('/editColor/:id',authMiddleware, upload.single('image'), editColor )
adminRouter.get('/getenq', getEnquire)
adminRouter.get('/getenqbyon', getEnquireByon)
adminRouter.get('/getenqbycom', getEnquireBycom)
adminRouter.get('/getenqid/:id', getEnquirebyId)
adminRouter.get('/getpayment', getPayment)
adminRouter.post('/shedule/:id', shedEnq)
adminRouter.put('/cancelPayment/:id',cancelPay)
adminRouter.put('/verifyPayment/:id', verifyPay)


export default adminRouter;