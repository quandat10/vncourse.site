import Skeleton from "react-loading-skeleton";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div id="content">
        {localStorage.getItem("user")?(<div className="colorlib-main">
          <div className="col-lg-12">
            <Skeleton variant="circle" width={60} height={60} />
            <p />
            <Skeleton variant="circle" width={1000} height={40} />
            <p />
            <Skeleton variant="rect" width={1000} height={400} />
          </div>
          <br />
          <div className="col-lg-12">
            <Skeleton variant="circle" width={60} height={60} />
            <p />
            <Skeleton variant="circle" width={1000} height={40} />
            <p />
            <Skeleton variant="rect" width={1000} height={400} />
          </div>
        </div>):(<div/>)}
      </div>
  );
};
