import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetailCourseLanding from "./DetailCourseLanding";
import RelateCourse from "./relate_course/RelateCourse";
import SectionContent from "./section_content/SectionContent";
import "./breadcrumb.css";
import { connect } from "react-redux";
import { getCourse,getManyCourse,getAllCourse } from "../../../actions";
import LoadingHome from "../loader/LoadingHome";
const DetailCourse = (props) => {
  const [check, setCheck] = useState(false);
  const [course, setCourse] = useState();
  const [bestCourse, setBestCourse] = useState();
  const [courseByPage, setCourseByPage] = useState();
  useEffect(() => {
    const id = props.match.params.id;
    props.getCourse(id);
    props.getManyCourse(5, 1);
    props.getAllCourse('like',4,1)
    setCheck(true);
  }, []);
  useEffect(() => {
    if (check) {
      if (props.course) {
        setCourse(props.course);
      }
    }
  }, [props.course]);
  useEffect(() => {
    if (check) {
      if (props.courseByPage) {
        setCourseByPage(props.courseByPage);
      }
    }
  }, [props.courseByPage]);
  useEffect(() => {
    if (check) {
      if (props.bestCourse) {
        setBestCourse(props.bestCourse);
      }
    }
  }, [props.bestCourse]);
  return (
    <div className="bg-light">
      {course !== undefined && courseByPage !== undefined && bestCourse !== undefined ? (
        <div className="container">
            <ul className="breadcrumb ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/courses/${course.data?.category.toLowerCase()}`}>{course.data?.category}</Link>
              </li>

            </ul>
            <DetailCourseLanding
              title={course.data?.title}
              tags={course.data?.tag}
              time={course.data?.timeCreate}
              image={course.data?.image}
            />
            <SectionContent
              content={course.data?.content}
              tags={course.data?.tag}
              courses={courseByPage?.data.data}
              linkDownload={course.data?.linkDownload}
              category={course.data?.category}
            />
            <RelateCourse courses={bestCourse.data}/>
          </div>
      ) : (
        <LoadingHome />
      )}
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    course: state.course,
    courseByPage: state.courseByPage,
    bestCourse:state.courses.data
  };
};
export default connect(mapStateToProp, { getCourse, getManyCourse,getAllCourse })(
  DetailCourse
);
