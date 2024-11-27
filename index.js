import connectDB from './config/db.js'; 
import express from 'express';
import courseRouter from './routes/CourseRoute.js'; 
const app=express()

connectDB();
app.use(express.json());
app.use('/api/course', courseRouter);


app.listen(5002,()=>{
    console.log("Server started at 5002")
})