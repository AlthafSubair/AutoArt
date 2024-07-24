import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './db/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import authRouter from './routes/authRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173'], // Adjust as needed for your frontend's port
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type,Authorization'],
    credentials: true // If you need to support credentials
};

app.use(cors(corsOptions));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));
app.use('/avatar', express.static(path.join(path.resolve(), 'avatar')))

// Log the error details
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter)

app.use(notFound);
app.use(errorHandler);

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
