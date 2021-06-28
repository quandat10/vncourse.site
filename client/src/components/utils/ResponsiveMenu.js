import { Link } from "react-router-dom";

const ResponsiveMenu = ({ click }) => {
  return (
    <div className={`responsive-menu ${click ? "active" : ""}`}>
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/courses/development">Development</Link>
        </li>
        <li>
          <Link to="/courses/business">Business</Link>
        </li>
        <li>
          <Link to="/courses/Office%20Productivity">Office Productivity</Link>
        </li>
        <li>
          <Link to="/courses/design">Design</Link>
        </li>
        <li>
          <Link to="/courses/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};
export default ResponsiveMenu;
