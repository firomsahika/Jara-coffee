import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';
dotenv.config(); // Load environment variables from .env


const connectDB = async () => {
  try{
    await mongoose.connect(process.env.mongodb_con_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected...");
  }catch(err){
     console.error(err)
     process.exit(1)
  }
}

export default connectDB;