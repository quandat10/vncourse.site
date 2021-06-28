import { Link } from "react-router-dom";
const RelateCourse = ({ courses }) => {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2>BEST COURSES</h2>
          </div>
        </div>
        <div className="row align-items-stretch retro-layout">
          <div className="col-md-5 order-md-2">
            <Link
              to={`/course/${courses[0].category.toLowerCase()}/${courses[0]._id}`}
              className="hentry img-1 h-100 gradient"
              style={{ backgroundImage: `url(${courses[0].image[1]})` }}
            >
              <div className="text">
                <h2>{courses[0].title}</h2>
                <span>{courses[0].timeCreate}</span>
              </div>
            </Link>
          </div>
          <div className="col-md-7">
            <Link
              to={`/course/${courses[1].category.toLowerCase()}/${courses[1]._id}`}
              className="hentry img-2 v-height mb30 gradient"
              style={{ backgroundImage: `url(${courses[1].image[1]})` }}
            >
              <div className="text text-sm">
                <h2>{courses[1].title}</h2>
                <span>{courses[1].timeCreate}</span>
              </div>
            </Link>
            <div className="two-col d-block d-md-flex">
              <Link
                to={`/course/${courses[2].category.toLowerCase()}/${courses[2]._id}`}
                className="hentry v-height img-2 gradient"
                style={{ backgroundImage: `url(${courses[2].image[1]})` }}
              >
                <div className="text text-sm">
                  <h2>{courses[2].title}</h2>
                  <span>{courses[2].timeCreate}</span>
                </div>
              </Link>
              <Link
                to={`/course/${courses[3].category.toLowerCase()}/${courses[3]._id}`}
                className="hentry v-height img-2 ml-auto gradient"
                style={{ backgroundImage: `url(${courses[3].image[1]})` }}
              >
                <div className="text text-sm">
                  <h2>{courses[3].title}</h2>
                  <span>{courses[3].timeCreate}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelateCourse;
