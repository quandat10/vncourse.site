import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCourse } from "../../../actions";
import renderTagss from "../tags/TagComponent";

const RecentCourse = (props) => {
  const renderCourses = props.data.map((course) => {
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
            <span className={`post-category text-white ${course.color} mb-3`}>
              {course.topic}
            </span>
            <h2>
              <Link
                to={`/course/${course.category.toLowerCase()}/${course._id}`}
              >
                {course.title}
              </Link>
            </h2>
            <div className="post-meta align-items-center text-left clearfix">
              <span>{course.time}</span>
            </div>
            <p>{course.shortScript}</p>
            <p>
              <Link
                to={`/course/${course.category.toLowerCase()}/${course._id}`}
              >
                Detail
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <br />
        <div className="row mb-5">
          <div className="col-12">
            <h2>
              <strong>THE LASTEST COURSES</strong>
            </h2>
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
                  <h3 className="heading">
                    <strong>CATEGORY</strong>
                  </h3>
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
        {/* <div className="row text-center pt-5 border-top">
          <div className="col-md-12">
          <Link >Xem tất cả các khoá học</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RecentCourse;
