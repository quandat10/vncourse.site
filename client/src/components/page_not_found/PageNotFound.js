import {Link} from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
  return (
    <div id="wrapper">

    <div className="container-fluid">
      {/* 404 Error Text */}
      <div className="text-center">
        <div className="error mx-auto" data-text={404}>404</div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">Dường như chúng tôi không tìm thấy trang bạn muốn đến ...</p>
        <Link to="/">← Trở về trang chủ</Link>
        </div>
      </div>
    </div>

  )
}
