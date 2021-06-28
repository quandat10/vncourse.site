import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import renderTagss from "../../tags/TagComponent";
const SectionContent = ({ content, tags, courses, linkDownload, category }) => {
  const renderTags = tags.map((tag) => {
    return (
      <span key={tag.id}>
        <Link to={`/courses/${category}/${tag.value}`}>
          <button className="ui teal basic button"> {tag.value}</button>
        </Link>
        &nbsp;&nbsp;
      </span>
    );
  });
  const renderCourse = courses.map((course) => {
    return (
      <li key={course._id}>
        <Link to={`/course/${course.category.toLowerCase()}/${course._id}`}>
          <img
            src={`${course.image[1]}`}
            alt="Image placeholder"
            className="mr-4"
          />
          <div className="text">
            <h4>{course.title}</h4>
            <div className="post-meta">
              <span className="mr-2">{course.timeCreate}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <section className="site-section py-lg">
      <div className="container">
        <div className="row blog-entries element-animate">
          <div className="col-md-12 col-lg-8 main-content">
            <div className="post-content-body">{ReactHtmlParser(content)}</div>

            <h1>DOWNLOAD HERE</h1>
            <a href={linkDownload} target="_blank">
              <button className="ui button">
                <i className="download icon"></i>
              </button>
            </a>
            <div className="pt-5">
              <p>Tags: {renderTags}</p>
            </div>
            <br />
          </div>
          {/* END main-content */}
          <div className="col-md-12 col-lg-4 sidebar">
            <div className="sidebar-box search-form-wrap">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search" />
                  <input
                    type="text"
                    className="form-control"
                    id="s"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>

            <div className="sidebar-box">
              <br />

              <h3 className="heading">
                <strong>Best courses</strong>
              </h3>
              <div className="post-entry-sidebar">
                <ul>{renderCourse}</ul>
              </div>
            </div>

            {/* END sidebar-box */}
            <div className="sidebar-box">
              <br />
              <h3 className="heading">
                <strong>Category</strong>
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
              <br />
            </div>

            {/* END sidebar-box */}
            <div className="sidebar-box">
              <br />

              <h3 className="heading">
                <strong>Tags</strong>
              </h3>
              <ul className="tags">{renderTagss}</ul>
              <br />
            </div>
          </div>
          {/* END sidebar */}
        </div>
      </div>
    </section>
  );
};
export default SectionContent;
