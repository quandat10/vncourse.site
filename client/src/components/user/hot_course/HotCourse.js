import { Link } from "react-router-dom";

const HotCourse = (props) => {
  const renderTag = props.course[0].tag.map((e) => {
    return (
      <span
        key={e.id}
        className={`post-category bg-${e.id % 2 === 0 ? "danger" : "success"}`}
      >
        {e.value}
      </span>
    );
  });
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row align-items-stretch retro-layout-2">
          <div className="col-md-4">
            <Link
              to={`/course/${props.course[2].category.toLowerCase()}/${props.course[2]._id}`}
              className="h-entry mb-30 v-height gradient"
              style={{ backgroundImage: `url(${props.course[2].image[1]})` }}
            >
              <div className="text">
                <h2>{props.course[2].title}</h2>
                <span className="date">{props.course[2].timeCreate}</span>
              </div>
            </Link>
            <Link
              to={`/course/${props.course[1].category.toLowerCase()}/${props.course[1]._id}`}
              className="h-entry v-height gradient"
              style={{ backgroundImage: `url(${props.course[1].image[1]})` }}
            >
              <div className="text">
                <h2>{props.course[1].title}</h2>
                <span className="date">{props.course[1].timeCreate}</span>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to={`/course/${props.course[0].category.toLowerCase()}/${props.course[0]._id}`}
              className="h-entry img-5 h-100 gradient"
              style={{ backgroundImage: `url(${props.course[0].image[1]})` }}
            >
              <div className="text">
                <div className="post-categories mb-3">{renderTag}</div>
                <h2>{props.course[0].title}</h2>
                <span className="date">{props.course[0].timeCreate}</span>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to={`/course/${props.course[3].category.toLowerCase()}/${props.course[3]._id}`}
              className="h-entry mb-30 v-height gradient"
              style={{ backgroundImage: `url(${props.course[3].image[1]})` }}
            >
              <div className="text">
                <h2>{props.course[3].title}</h2>
                <span className="date">{props.course[3].timeCreate}</span>
              </div>
            </Link>
            <Link
              to={`/course/${props.course[4].category.toLowerCase()}/${props.course[4]._id}`}
              className="h-entry v-height gradient"
              style={{ backgroundImage: `url(${props.course[4].image[1]})` }}
            >
              <div className="text">
                <h2>{props.course[4].title}</h2>
                <span className="date">{props.course[4].timeCreate}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotCourse;
