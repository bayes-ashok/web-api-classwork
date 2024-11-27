import Course from '../models/course.js';

export const findAll = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
export const createCourse = async (req, res) => {
    try {
        const { courseTitle, subTitle, description, category, courseLevel, coursePrice, courseThumbnail, enrolledStudents, lectures, creator, isPublished } = req.body;

        const course = new Course({
            courseTitle,
            subTitle,
            description,
            category,
            courseLevel,
            coursePrice,
            courseThumbnail,
            enrolledStudents,
            lectures,
            creator,
            isPublished
        });

        await course.save();

        res.status(201).json({
            message: 'Course created successfully!',
            course: course
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating course',
            error: error.message
        });
    }
};

//get course by ID
export const getCourseById = (req, res) => {
    const { courseId } = req.params;
  
    Course.findById(courseId)
      .then(course => {
        if (!course) {
          return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
      })
      .catch(err => res.status(500).json({ message: "Error fetching course", error: err }));
  };

  // update course
  export const updateCourse = (req, res) => {
    const { courseId } = req.params;
    const updates = req.body;
  
    Course.findByIdAndUpdate(courseId, updates, { new: true })
      .then(updatedCourse => res.json(updatedCourse))
      .catch(err => res.status(400).json({ message: "Error updating course", error: err }));
  };

  // delete course
  export const deleteCourse = (req, res) => {
    const { courseId } = req.params;
  
    Course.findByIdAndDelete(courseId)
      .then(deletedCourse => {
        if (!deletedCourse) {
          return res.status(404).json({ message: "Course not found" });
        }
        res.json({ message: "Course deleted successfully" });
      })
      .catch(err => res.status(500).json({ message: "Error deleting course", error: err }));
  };