// import TryCatch from "../middlewares/tryCatch.js";
// import { rm } from "fs";
// import { promisify } from "util";
// import fs from "fs";
// import { User } from "../models/user.js";

// export const createCourse = TryCatch(async (req, res) => {
//   const { title, description, category, createdBy, duration, price } = req.body;

//   const image = req.file;

//   await Courses.create({
//     title,
//     description,
//     category,
//     createdBy,
//     image: image?.path,
//     duration,
//     price,
//   });
//   res.status(201).json({
//     message: "course created successfully",
//   });
// });

// const unlinkAsync = promisify(fs.unlink);

// export const getAllStats = TryCatch(async (req, res) => {
//   const totalCourses = (await Courses.find()).length;
//   const totalLectures = (await Lecture.find()).length;
//   const totalUsers = (await User.find()).length;

//   const stats = {
//     totalCourses,
//     totalLectures,
//     totalUsers,
//   };
//   res.json({
//     stats,
//   });
// });
