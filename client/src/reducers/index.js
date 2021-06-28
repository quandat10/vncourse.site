import { combineReducers } from "redux";
import CreateCourse from './CreateCourse';
import DeleteCourse from "./DeleteCourse";
import GetACourse from "./GetACourse";
import GetAllCourse from './GetAllCourse';
import GetCourseByCategory from "./GetCourseByCategory";
import GetManyCourse from "./GetManyCourse";
import LoginReducer from './LoginReducer';
import UpdateCourse from "./UpdateCourse";
import SearchReducer from "./SearchReducer";
export default combineReducers({
    courses:GetAllCourse,
    newCourse:CreateCourse,
    login:LoginReducer,
    course:GetACourse,
    courseByPage:GetManyCourse,
    courseByCategory:GetCourseByCategory,
    update:UpdateCourse,
    delete:DeleteCourse,
    search:SearchReducer
});
