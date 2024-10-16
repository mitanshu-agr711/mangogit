import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// console.log(`process.env.DB`, process.env.DB);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connectDB;
