import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import process from 'process'
import Admin from '../models/Admin.js'
import dotenv from 'dotenv';

dotenv.config();

const login = async (req, res) => {
   const {username, password} = req.body;

   try {
    const admin = await Admin.findOne({username})
    if(!admin){
        return res.status(400).json({message: "Invalid credentials!"})
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials!"})
    }

    const token = jwt.sign({id:admin._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({token})

   } catch (err) {
    console.error(err)
    res.status(500).json({message:"Server error!"})
   }

}

export default login