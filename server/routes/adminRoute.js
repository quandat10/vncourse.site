const express = require('express');
const {signup,login,protect} = require('../controllers/authController');
const {createCourse,updateCourse,deleteCourse} = require('../controllers/courseController');
const route = express.Router();


route.route('/login').post(login);
route.route('/signup').post(signup);
route.route('/courses').post(protect,createCourse);
route.route('/course/:id').post(protect,updateCourse).delete(protect,deleteCourse);
module.exports = route;
