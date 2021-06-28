// import Header from "../header/Header";
import { useEffect, useState } from "react";
import { deleteCourse, getAllCourse } from "../../../actions";
// import { getTags } from "../../../actions";
import { connect } from "react-redux";
import Loading from "../../user/loader/Loading";
import { Link } from "react-router-dom";
import "./tables.css";

const Tables = (props) => {
  const [courses, setCourses] = useState([]);
  const [check, setCheck] = useState(false);
  const [numPage, setNumPage] = useState();
  const [arrPage, setArrPage] = useState([]);
  const [first, setFirst] = useState(false);
  const [testSearch, setTestSearch] = useState("");
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const userLogin = localStorage.getItem("user");
    if (userLogin) {
      setCheck(true);
    } else {
      props.history.push("/login");
    }
  }, []);
  let page = 1;
  let active = 1;
  let del = false;
  let idDel = 1;
  useEffect(() => {
    page = props.location.query ? props.location.query.page : 1;
    props.getAllCourse("", 10, page,search);
    setCheck(true);
    setLoaded(false);
  }, [page,search]);
  useEffect(() => {
    del = props.location.query ? props.location.query.delete : false;
    idDel = props.location.query ? props.location.query.idDel : 1;
    if (idDel !== 1 && idDel !== undefined) {
      props.deleteCourse(idDel, localStorage.getItem("token"));
      setFirst(true);
    }
    setCheck(true);
  }, [del, idDel]);
  useEffect(() => {
    if (check) {
      if (props.courses.status !== undefined) {
        setLoaded(true);
        setCourses(props.courses.data);
        setNumPage(props.courses.lengthDb);
        setArrPage(
          Array.from(Array(Math.ceil(props.courses.lengthDb / 10)).keys())
        );
      }
    }
  }, [props.courses]);

  const renderPagination = arrPage.map((idx) => {
    let newPage = props.location.query ? props.location.query.page : 1;
    if (newPage === undefined) {
      newPage = 1;
    }
    active = (idx + 1) * 1 === newPage * 1 ? "active" : "";
    return (
      <li className={`page-item ${active}`} key={idx}>
        <Link
          className="page-link"
          to={{ pathname: `/v1/admin/tables`, query: { page: idx + 1 } }}
        >
          {idx + 1}
        </Link>
      </li>
    );
  });
  const renderTable = courses.map((data, index) => {
  const renderTags = data.tag.map(tag=>{
    return (
      <p key={tag.id}>{tag.value}</p>
    )
  })

    return (
      <tr key={data._id} className="hover-button ">
        <td>{index + 1}</td>
        <td>
          <Link to={`/course/${data.category.toLowerCase()}/${data._id}`}>{data.title}</Link>
        </td>
        <td>{data.category}</td>
        <td>
          <div>{renderTags}</div>
        </td>
        <td>{data.like}</td>

        <td>
          <div className="parent">
            {data.view}
            <span className="hover-button--on child child-1">
              <Link
                to={`/v1/admin/edit/${data._id}`}
                style={{ marginRight: "15px" }}
              >
                <i className="fas fa-edit"></i>
              </Link>
              <Link
                to={{
                  pathname: `/v1/admin/tables`,
                  query: { delete: true, idDel: data._id },
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </span>
          </div>
        </td>
      </tr>
    );
  });
  //Search
  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(testSearch);
    setLoaded(false);
  };
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      {loaded && localStorage.getItem("user") ? (
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <form className="form-inline">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars" />
              </button>
            </form>
            {/* Topbar Search */}
            <form
              className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
              onSubmit={submitSearch}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Tìm kiếm ..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={testSearch}
                  onChange={(e) => setTestSearch(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={submitSearch}
                  >
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Tìm kiếm ..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block" />
              <li className="nav-item dropdown no-arrow">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    admin
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="/assets/img/undraw_profile.svg"
                  />
                </Link>
                {/* Dropdown - User Information */}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div
                className="card-header py-3 row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h6 className="m-0 font-weight-bold text-primary">
                </h6>
                <Link to="/v1/admin/dashboard">
                  <button className="positive ui button">Tạo mới</button>
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>Stt</th>
                        <th>Tiêu đề</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Lượt thích</th>

                        <th>Lượt xem</th>
                      </tr>
                    </thead>

                    <tbody>{renderTable}</tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example">
                  <ul
                    className="pagination"
                    style={{ justifyContent: "center" }}
                  >
                    
                    {renderPagination}
                   
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
      ) : (
        <Loading />
      )}
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>© Bkit 2021</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    courses: state.courses.data,
  };
};
export default connect(mapStateToProp, { getAllCourse, deleteCourse })(Tables);
// export default Tables;
