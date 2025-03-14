import dotenv from 'dotenv';
import Blog from "../models/Blog.js"

dotenv.config();

const createBlog = async (req, res) => {
    const { title, content, author } = req.body;

   try {
    const newBlog = new Blog({
       title,
       content,
       author
    })

    await newBlog.save();
    res.status(201).json({newBlog});

   } catch (err) {
    console.error(err)
    res.status(500).json({message: "Server error!"})
   }

}

export default createBlog;