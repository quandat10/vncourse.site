
import {Link} from 'react-router-dom';

const Header =  (props)=>{
  const logout = ()=>{
    localStorage.clear();
  }

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">Dashboard</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
      <Link className="nav-link" to="/v1/admin/dashboard">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Trang chủ</span></Link>
      </li>
      {/* Divider */}

      {/* Nav Item - Tables */}
      <li className="nav-item active">
      <Link className="nav-link" to="/v1/admin/tables">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Tables</span></Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      <li className="nav-item active">
      <Link className="nav-link" to="/v1/admin/login" onClick={logout}>
        <i className="fas fa-fw fa-table" />
        <span>Đăng xuất</span></Link>
      </li>
      {/* Sidebar Toggler (Sidebar) */}

    </ul>
  )
}
export default Header;
