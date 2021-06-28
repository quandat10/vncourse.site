import { useEffect, useState } from "react";
import { connect } from "react-redux";
import HotCourse from "../hot_course/HotCourse";
import LoadingHome from "../loader/LoadingHome";
import RecentCourse from "../recent_course/RecentCourse";
import { getManyCourse ,getAllCourse} from "../../../actions";
const HomePage = (props) => {
  const [check,setCheck] = useState(false);
  const [hotCourse,setHotCourse]=useState();
  const [courses,setCourses]=useState()

  useEffect(() => {
    props.getManyCourse(16, 1);
    props.getAllCourse('view', 5,1);
    setCheck(true);
  }, []);
  useEffect(()=>{
    if(check){
      if(props.hotCourse){
        setHotCourse(props.hotCourse)
      }
    }
  },[props.hotCourse])
  useEffect(()=>{
    if(check){
      if(props.courses){
        setCourses(props.courses)
      }
    }
  },[props.courses])
  return (
    <div>
      
      {courses !== undefined && hotCourse!==undefined ? (
        <div>
          <HotCourse course={props.hotCourse.data}/>
          <RecentCourse data={props.courses.data}  />
        </div>
      ) : (
        <LoadingHome />
      )}
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    courses: state.courseByPage?.data,
    hotCourse:state.courses?.data
  };
};
export default connect(mapStateToProp, { getManyCourse,getAllCourse })(HomePage);
