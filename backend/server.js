import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db';
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
