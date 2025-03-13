import express from 'express';
import createBlog from '../controllers/blogControllers';
import jwtMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/create-blog', jwtMiddleware, createBlog)

export default router;