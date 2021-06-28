import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { searchCourse } from "../../../actions";
import Loading from "../loader/Loading";
import LoadingHome from "../loader/LoadingHome";
import LoadingItem from "../loader/LoadingItem";
import renderTagss from "../tags/TagComponent";

const SearchCourse = (props) => {
  const [check, setCheck] = useState(false);
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(false);
  const [enter, setEnter] = useState(false);
  const search = props.location.state.data;
  useEffect(() => {
    setLoading(true);
    setEnter(true);
    props.searchCourse(search);
    setCheck(true);
  }, [search]);
  useEffect(() => {
    if (check) {
      if (enter) {
        if (props.search) {
          setLoading(false);
          if (props.search.status === "success") {
            setCourses(props.search.data);
            setEnter(false);
          }
        }
      }
    }
  }, [props.search]);
  const renderCourses =
    courses !== undefined ? (
      courses.map((course) => {
        return (
          <div className="col-lg-6 mb-4" key={course._id}>
            <div className="entry2">
              <Link to={`/course/${course.category.toLowerCase()}/${course._id}`}>
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
                  <Link to={`/course/${course.category.toLowerCase()}/${course._id}`}>
                    {course.title}
                  </Link>
                </h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <span>{course.time}</span>
                </div>
                <p>{course.shortScript}</p>
                <p>
                  <Link to={`/course/${course.category.toLowerCase()}/${course._id}`}>
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
              <h2>
                <strong>RESULT:</strong>
              </h2>
            </div>
          </div>

          <section className="py-lg">
            <div className="container">
              <div className="row blog-entries element-animate">
                {!loading ? (
                  <div className="col-lg-8 col-lg-8 main-content">
                    <div className="row">{renderCourses}</div>
                  </div>
                ) : (
                  <LoadingItem />
                )}

                <div className="col-md-4 col-lg-4 sidebar">
                  <div className="sidebar-box">
                    <h3 className="heading">
                      <strong>CATEGORY</strong>
                    </h3>
                    <ul className="categories">
                      <li>
                        <Link to="/courses/Development">
                          Development <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/Business">
                          Business <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/Office Productivity">
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
                    <h3 className="heading">
                      <strong>Tags</strong>
                    </h3>
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
export default connect(mapStateToProp, { searchCourse })(SearchCourse);
