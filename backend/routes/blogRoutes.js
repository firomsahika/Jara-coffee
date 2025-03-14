import express from 'express';
import createBlog from '../controllers/blogControllers.js';
import jwtMiddleware from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/create-blog', jwtMiddleware, createBlog)

export default router;