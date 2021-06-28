import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponsiveMenu from "../../utils/ResponsiveMenu";

const Header = (props) => {
  // useEffect(() => {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }, []);
  let history = useHistory();
  const [search, setSearch] = useState();
  const [click, setClick] = useState(false);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      state: {
        data: search,
      },
    });
    setSearch("");
  };
  const path = window.location.pathname.split("/")[2]?.replace("%20", " ");

  const names = [
    ["Home", undefined],
    ["Development", "development"],
    ["business", "business"],
    ["Office Productivity", "office productivity"],
    ["Design", "design"],
    ["Blog", "blog"],
  ];
  const arr = [];
  names.forEach((name) => {
    if (name[1] === path) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  });

  return (
    <header style={{ backgroundColor: "antiquewhite" }}>
      {/* <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-6317714724228423"
        data-ad-slot={6916855775}
        data-adtest="on"
      /> */}

      <div className="container">
        <div className="header-content d-flex flex-wrap align-items-center">
          <div className="logo">
            {/* Logo here */}
            {/* <Link
              to="/"
             
            >
              <img
                src="assets/img/logo.png"
                alt=""
                srcSet="assets/img/logo.png"
              />
            </Link> */}
          </div>
          {/*logo end*/}
          {/* ------START CONTACT------- */}
          {/* <ul className="contact-add d-flex flex-wrap">
            <li>
              <div className="contact-info">
                <img src="assets/img/icon1.png" alt="" />
                <div className="contact-tt">
                  <h4>Call</h4>
                  <span>+84 378 283 131</span>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-info">
                <img src="assets/img/email.png" alt="" />
                <div className="contact-tt">
                  <h4>Email</h4>
                  <span>hello@dsc-hust.club</span>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-info">
                <img src="assets/img/edu.png" alt="" />
                <div className="contact-tt">
                  <h4>University</h4>
                  <span>Ha Noi University of Science & Technology</span>
                </div>
              </div>
            </li>
          </ul> */}
          {/* ------END CONTACT------- */}
          {/*contact-information end*/}
          <div
            className={`menu-btn ${click ? "active" : ""}`}
            onClick={() => setClick(!click)}
          >
            <a>
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </a>
          </div>
          {/*menu-btn end*/}
        </div>
        {/*header-content end*/}
        <div className="navigation-bar d-flex flex-wrap align-items-center">
          <nav>
            <ul>
              <li>
                <Link className={`${arr[0] ? "active" : ""}`} to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={`${arr[1] ? "active" : ""}`}
                  to="/courses/development"
                >
                  Development
                </Link>
                <ul>
                  <li>
                    <Link to="/courses/development/Web Developer">
                      Web Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Data Science">
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/AI - ML - DL">
                      AI - ML - DL
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Mobile Apps">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Programing Language">
                      Programing Language
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Game Developer">
                      Game Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Database">Database</Link>
                  </li>
                  <li>
                    <Link to="/courses/development/Software Testing">
                      Software Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/development/It Certification">
                      It Certification
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${arr[2] ? "active" : ""}`}
                  to="/courses/business"
                >
                  Business
                </Link>
                <ul>
                  <li>
                    <Link to="/courses/business/Finance">Finance</Link>
                    <Link to="/courses/business/Entrepreneurship">
                      Entrepreneurship
                    </Link>
                    <Link to="/courses/business/Communications">
                      Communications
                    </Link>
                    <Link to="/courses/business/Management">Management</Link>
                    <Link to="/courses/business/Sales">Sales</Link>
                    <Link to="/courses/business/Strategy">Strategy</Link>
                    <Link to="/courses/business/Operations">Operations</Link>
                    <Link to="/courses/business/Project Management">
                      Project Management
                    </Link>
                    <Link to="/courses/business/Business Law">
                      Business Law
                    </Link>
                    <Link to="/courses/business/Data & Analytics">
                      Data & Analytics
                    </Link>
                    <Link to="/courses/business/Home Business">
                      Home Business
                    </Link>
                    <Link to="/courses/business/Home Business">
                      Home Business
                    </Link>
                    <Link to="/courses/business/Other Business">
                      Other Business
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${arr[3] ? "active" : ""}`}
                  to="/courses/office%20productivity"
                >
                  Office Productivity
                </Link>
                <ul>
                  <li>
                    <Link to="/courses/Office%20Productivity/Microsoft">
                      Microsoft
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/Office%20Productivity/Google">
                      Google
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/Office%20Productivity/Apple">Apple</Link>
                  </li>
                  <li>
                    <Link to="/courses/Office%20Productivity/SAP">SAP</Link>
                  </li>
                  <li>
                    <Link to="/courses/Office%20Productivity/Oracle">
                      Oracle
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/Office%20Productivity/Other Productivity">
                      Other Productivity
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${arr[4] ? "active" : ""}`}
                  to="/courses/design"
                >
                  Design
                </Link>
                <ul>
                  <li>
                    <Link to="/courses/design/Web Design">Web Design</Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Graphic Design">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Design Tools">Design Tools</Link>
                  </li>
                  <li>
                    <Link to="/courses/design/User Experience">
                      User Experience
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Game Design">Game Design</Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Design Thinking">
                      Design Thinking
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/design/3D & Animation">
                      3D & Animation
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Fashion">Fashion</Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Architecural Design">
                      Architecural Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/design/Other">Other</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${arr[5] ? "active" : ""}`}
                  to="/courses/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          {/*nav end*/}
          <form
            className="ui right aligned category search"
            onSubmit={(e) => onSearchSubmit(e)}
          >
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i className="search icon" />
            </div>
            <div className="results" />
          </form>

          {/* <ul className="social-links ml-auto">
            <li>
              <a href="#" title>
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" title>
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#" title>
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul> */}
        </div>
        {/*navigation-bar end*/}
      </div>
      <div className="main-section">
        {/* <--header--> */}
        {/* <!--responsive-menu--> */}
        <ResponsiveMenu click={click} />
        <br />
        <h2 className="main-title"></h2>
      </div>
    </header>
  );
};

export default Header;
