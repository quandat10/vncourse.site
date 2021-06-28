import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./blockquote.css";
import Loading2 from "../../user/loader/Loading2";
import { connect } from "react-redux";
import { createCourse } from "../../../actions";
import { useAlert } from "react-alert";

const Dashboard = (props) => {
  const [value, setValue] = useState();
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [tags, setTags] = useState([]);
  const [chooseTag, setChooseTag] = useState("");
  const [category, setCategory] = useState("");
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState("");
  const [shortScript, setShortScript] = useState("");
  const [createBy, setCreateBy] = useState("admin");
  const [submit, setSubmit] = useState(false);
  const [checkSuccess, setCheckSuccess] = useState(0);
  const [cover, setCover] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [download, setDownload] = useState("");
  const alert = useAlert();
  const [first, setFirst] = useState(false);

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
    "Other Business"
  ];
  const OfficeTag = [
    "Microsoft",
    "Google",
    "Apple",
    "SAP",
    "Oracle",
    "Other Productivity"
  ]
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
    "Other"
  ];
  useEffect(() => {
    const userLogin = localStorage.getItem("user");
    if (userLogin) {
      setCheck(true);
    } else {
      props.history.push("/v1/admin/login");
    }
  }, []);
  const onSubmit = () => {
    setSubmit(true);
    setFirst(true);
    const image = [cover, thumbnail];
    props.createCourse(
      tags,
      createBy,
      shortScript,
      title,
      value,
      image,
      localStorage.getItem("token"),
      download,
      category
    );
  };
  useEffect(() => {
    if (click) {
      alert.show(
        <div style={{ color: "white" }}>
          {checkSuccess === 0 ? (
            <div className="ui left pointing red basic label">
              Lỗi rồi   
            </div>
          ) : checkSuccess === 1 ? (
            <div className="ui left pointing red basic label">
              èo, lỗi r kìa?
            </div>
          ) : (
            <div className="ui left pointing green basic label">
              Ngon, tạo ok
            </div>
          )}
        </div>
      );
      setClick(false);
    }
  }, [click]);
  useEffect(() => {
    setSubmit(false);
    if (first) {
      setClick(true);
      if (props.newCourse.status === 201) {
        if (props.newCourse.data !== undefined) {
          if (props.newCourse.data.status === "Failed") {
            setCheckSuccess(1);
          } else {
            setTitle("");
            setShortScript("");
            setCover("");
            setThumbnail("");
            setDownload("");
            setCategory("");
            setTags([]);
            setValue("");
            setCategory("");
            setCheckSuccess(2);
            window.scrollTo(0, 0)
          }
        }
      }else{
        setCheckSuccess(1);
      }
    }
  }, [props.newCourse]);
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
      <button className="ui purple basic button" key={tag.id} onClick={()=>setTags(tags.filter(e=>e.id!==tag.id))}>
        {tag.value}
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


  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {check ? (
        <div id="content">
          <div className="container-fluid">
            <br />
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Tiêu Đề</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nhập tiêu đề ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-primary">
              <div className="card-body">
                <h3>Miêu tả ngắn</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nhập miêu tả ..."
                    value={shortScript}
                    onChange={(e) => setShortScript(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Link Ảnh Cover</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nhập tiêu đề ..."
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="card mb-4 py-3 border-left-secondary">
              <div className="card-body">
                <h3>Link Ảnh Thumbnail</h3>
              </div>
              <form className=" card-body ui form">
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Nhập tiêu đề ..."
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
                    placeholder="Nhập tiêu đề ..."
                    value={download}
                    onChange={(e) => setDownload(e.target.value)}
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
                <option value="">Chủ đề</option>
                <option value="development">Development</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="office productivity">Office</option>
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
                <h3>Nội dung</h3>
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
                {submit ? <Loading2 /> : "Tạo mới"}
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
export default connect(mapStateToProp, { createCourse })(Dashboard);
