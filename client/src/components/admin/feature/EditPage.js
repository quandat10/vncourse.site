import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Loading2 from "../../user/loader/Loading2";
import { updateCourse, getCourse } from "../../../actions";
import { useAlert } from "react-alert";
import "./tables.css";
import { Link } from "react-router-dom";
const EditPage = (props) => {
  const [value, setValue] = useState();
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const id = props.match.params.id;
  const [title, setTitle] = useState("");
  const [shortScript, setShortScript] = useState("");
  const [createBy, setCreateBy] = useState("admin");
  const [submit, setSubmit] = useState(false);
  const [checkSuccess, setCheckSuccess] = useState(0);
  const [cover, setCover] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [download, setDownload] = useState("");
  const [click, setClick] = useState(false);
  const alert = useAlert();
  const [first, setFirst] = useState(false);
  const [view, setView] = useState(1);
  const [like, setLike] = useState(1);
  const itTags = [
    "Web Developer",
    "Data Science",
    "AI-ML-DL",
    "Mobile App",
    "Programing Language",
    "Game Developer",
    "Database",
    "Software Testing",
    "It Certification",
    "DevOps",
    "Network & Security",
    "Block Chain",
  ];
  const plTags = [
    "Bootstrap",
    "WordPress",
    "React",
    "VueJs",
    "Nodejs",
    "Java",
    "C++",
    "Flutter",
    "Javasript",
    "kotlin",
    "Python",
    "Mongodb",
    "Sql",
    "MySql",
    "ASP.net",
    "Swift",
    "Rust",
    "Angular",
    "Laravel",
    "Html/Css",
    "PHP",
    "Django"

  ];
  const businessTags = [
    "Finance",
    "Entrepreneurship",
    "Communications",
    "Management",
    "Sales",
    "Strategy",
    "Operations",
    "Project Management",
    "Business Law",
    "Data & Analytics",
    "Home Business",
    "Human Resources",
    "Industry",
    "Media",
    "Real Estate",
    "Other Business",
  ];
  const OfficeTag = [
    "Microsoft",
    "Google",
    "Apple",
    "SAP",
    "Oracle",
    "Other Productivity",
  ];
  const graphTags = [
    "Web Design",
    "Graphic Design",
    "Design Tools",
    "User Experience",
    "Game Design",
    "Design Thinking",
    "3D & Animation",
    "Fashion",
    "Architectural Design",
    "interior Design",
    "Other",
  ];
  useEffect(() => {
    const userLogin = localStorage.getItem("user");
    if (userLogin) {
      setCheck(true);
    } else {
      props.history.push("/v1/admin/login");
    }
  }, []);
  useEffect(() => {
    props.getCourse(id);
    setCheck(true);
  }, []);
  useEffect(() => {
    if (check) {
      if (props.course.status === "ok") {
        const data = props.course.data;
        setTitle(data.title);
        setCategory(data.category);
        setShortScript(data?.shortScript);
        setTags(data.tag);
        setDownload(data?.linkDownload);
        setThumbnail(data?.image[1]);
        setCover(data?.image[0]);
        setValue(data.content);
        setLike(data.like);
        setView(data.view);
      }
    }
  }, [props.course]);
  useEffect(() => {
    setSubmit(false);
    if (first) {
      setClick(true);
      if (props.update.status === "ok") {
        setCheckSuccess(2);
        setTimeout(() => props.history.push("/v1/admin/tables"), 1000);
      } else {
        setCheckSuccess(1);
      }
    }
  }, [props.update]);
  useEffect(() => {
    if (click) {
      alert.show(
        <div style={{ color: "white" }}>
          {checkSuccess === 0 ? (
            <div className="ui left pointing red basic label">L???i r???i</div>
          ) : checkSuccess === 1 ? (
            <div className="ui left pointing red basic label">
              ???? c?? l???i x???y ra, vui l??ng ki???m tra l???i
            </div>
          ) : (
            <div className="ui left pointing green basic label">
              C???p nh???t ok nh??
            </div>
          )}
        </div>
      );
      setClick(false);
    }
  }, [click]);
  const onSubmit = () => {
    const image = [cover, thumbnail];
    setSubmit(true);
    setFirst(true);

    props.updateCourse(
      id,
      tags,
      createBy,
      shortScript,
      title,
      value,
      image,
      localStorage.getItem("token"),
      download,
      category,
      view,
      like
    );
  };
  const handleOnchange = (e, editor) => {
    const data = editor.getData();
    setValue(data);
  };
  const onClickTag = (e) => {
    setCount(count + 1);
    setTags((tags) => [...tags, { id: count, value: e.target.value }]);
  };
  const renderTag = tags.map((tag) => {
    return (
      <button className="ui purple basic button" key={tag.id}  onClick={()=>setTags(tags.filter(e=>e.id!==tag.id))}>
        {tag.value}
         
      </button>
    );
  });
  const renderItTags = itTags.map((tag) => {
    return (
      <button
        key={tag}
        type="button"
        className="btn btn-outline-primary"
        value={tag}
        onClick={onClickTag}
      >
        {tag}
      </button>
    );
  });
  const renderPlTags = plTags.map((tag) => {
    return (
      <button
        key={tag}
        type="button"
        className="btn btn-outline-info"
        value={tag}
        onClick={onClickTag}
      >
        {tag}
      </button>
    );
  });
  const renderBusinessTags = businessTags.map((tag) => {
    return (
      <button
        key={tag}
        type="button"
        className="btn btn-outline-warning"
        value={tag}
        onClick={onClickTag}
      >
        {tag}
      </button>
    );
  });
  const renderOfficeTags = OfficeTag.map((tag) => {
    return (
      <button
        key={tag}
        type="button"
        className="btn btn-outline-danger"
        value={tag}
        onClick={onClickTag}
      >
        {tag}
      </button>
    );
  });
  const renderGraphicTags = graphTags.map((tag) => {
    return (
      <button
        key={tag}
        type="button"
        className="btn btn-outline-success"
        value={tag}
        onClick={onClickTag}
      >
        {tag}
      </button>
    );
  });

  useEffect(() => {
    if (props.newCourse.length !== 0) {
      if (props.newCourse?.data.status === "Failed") {
        setCheckSuccess(1);
      } else {
        setCheckSuccess(2);
      }
    }
  }, [props.newCourse]);
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {check ? (
        <div id="content">
          <div className="container-fluid">
            <br />
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Ti??u ?????</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-primary">
              <div className="card-body">
                <h3>Mi??u t??? ng???n</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p mi??u t??? ..."
                    value={shortScript}
                    onChange={(e) => setShortScript(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Link ???nh Cover</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Link ???nh Thumbnail</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Link Download</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={download}
                    onChange={(e) => setDownload(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>L?????t xem</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>L?????t th??ch</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nh???p ti??u ????? ..."
                    value={like}
                    onChange={(e) => setLike(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Category</h3>
              </div>
              <select
                className=" card-body ui dropdown"
                style={{ margin: "10px" }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Ch??? ?????</option>
                <option value="development">Development</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="office Productivity">Office</option>
              </select>
            </div>
            <div className="card mb-4 py-3 border-left-success">
              <div className="card-body">
                <h3>Tag</h3>
              </div>

              <div className="card-body">
                {renderItTags}
                {renderPlTags}
                {renderBusinessTags}
                {renderOfficeTags}
                {renderGraphicTags}
              </div>
              <div className="card-body">{renderTag}</div>
            </div>

            <div className="card mb-4 py-3 border-left-dark">
              <div className="card-body">
                <h3>N???i dung</h3>
              </div>
              <div className="card-body blockquote">
                <CKEditor
                  editor={ClassicEditor}
                  data={value}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                  }}
                  onChange={handleOnchange}
                  onBlur={(event, editor) => {
                    // console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    // console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <button
                className="positive ui button col-lg-4"
                onClick={onSubmit}
              >
                {submit ? <Loading2 /> : "C???p nh???t"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading2 />
      )}
      <br />
    </div>
  );
};
const mapStateToProp = (state) => {
  return state;
};
export default connect(mapStateToProp, { getCourse, updateCourse })(EditPage);