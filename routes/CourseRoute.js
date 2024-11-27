import express from 'express';
import { findAll,createCourse,getCourseById,updateCourse,deleteCourse } from '../controller/courseController.js'; // Named import

const courseRouter = express.Router();

courseRouter.post('/create', createCourse);  
courseRouter.get('/all', findAll);  
courseRouter.get('/getByID/:courseId', getCourseById)
courseRouter.put('/updateByID/:courseId', updateCourse); 
courseRouter.delete('/deleteByID/:courseId', deleteCourse);

export default courseRouter;