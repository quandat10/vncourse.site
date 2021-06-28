import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getByCategory } from "../../../actions";
import LoadingHome from "../loader/LoadingHome";
import renderTagss from "../tags/TagComponent";

const CourseByTag = (props) => {
  const [check, setCheck] = useState(false);
  const [courses, setCourses] = useState();
  const category = props.match.params.category;
  const tag = props.match.params.tag;

  useEffect(() => {
    props.getByCategory(category, tag);
    setCheck(true);
  }, []);
  useEffect(() => {
    if (check) {
      if (props.courseByCategory) {
        setCourses(props.courseByCategory.data.data);
      }
    }
  }, [props.courseByCategory]);

  const renderCourses =
    courses !== undefined ? (
      courses.map((course) => {
        return (
          <div className="col-lg-6 mb-4" key={course._id}>
            <div className="entry2">
              <Link to={`/course/${category.toLowerCase()}/${course._id}`}>
                <img
                  src={course.image[1]}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </Link>
              <div className="excerpt">
                <span
                  className={`post-category text-white ${course.color} mb-3`}
                >
                  {course.topic}
                </span>
                <h2>
                  <Link to={`/course/${category.toLowerCase()}/${course._id}`}>
                    {course.title}
                  </Link>
                </h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <span>{course.time}</span>
                </div>
                <p>{course.shortScript}</p>
                <p>
                  <Link to={`/course/${category.toLowerCase()}/${course._id}`}>
                    Detail
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div></div>
    );
  return (
    <div>
      {courses !== undefined ? (
        <div className="container">
          <br />
          <div className="row mb-5">
            <div className="col-12">
              <h2><strong>THE LASTEST COURSES</strong></h2>
            </div>
          </div>
          <section className="py-lg">
            <div className="container">
              <div className="row blog-entries element-animate">
                <div className="col-lg-8 col-lg-8 main-content">
                  <div className="row">{renderCourses}</div>
                  
                </div>

                <div className="col-md-4 col-lg-4 sidebar">
                  <div className="sidebar-box">
                    <h3 className="heading"><strong>CATEGORY</strong></h3>
                    <ul className="categories">
                      <li>
                        <Link to="/courses/development">
                          Development <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/business">
                          Business <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/office productivity">
                          Office Productivity <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/design">
                          Design <span></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-box">
                    <h3 className="heading"><strong>Tags</strong></h3>
                    <ul className="tags">{renderTagss}</ul>
                  </div>

                  {/*Advertisement*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <LoadingHome />
      )}
    </div>
  );
};
const mapStateToProp = (state) => {
  return state;
};
export default connect(mapStateToProp, { getByCategory })(CourseByTag);
