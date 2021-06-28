const express = require('express');
const {getAllCourse, getCourse, getLastestCourse,fillCategory} = require('../controllers/courseController')
const route = express.Router();
route.route('/courses').get(getAllCourse);
route.route('/course/lastest').get(getLastestCourse);
route.route('/courses/:id').get(getCourse);
route.route('/fillcategory').get(fillCategory);



module.exports = route;
