const DetailCourseLanding = ({ title, tags, time,image }) => {

  
  return (
    <div
      className="site-cover site-cover-sm same-height overlay single-page"
      style={{ backgroundImage: `url("${image[0]}")` }}
    >
      <div className="container">
        <div className="row same-height justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="post-entry text-center">

              
              <h1 className="mb-4">
                <a href="#">{title}</a>
              </h1>
              <div className="post-meta align-items-center text-center">
                <figure className="author-figure mb-0 mr-3 d-inline-block">
                  <img
                    src="/assets/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">VidaTeam</span>
                <span>&nbsp;-&nbsp;{time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCourseLanding;
