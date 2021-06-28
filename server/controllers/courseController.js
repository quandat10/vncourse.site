const Course = require("../models/courseModel");
const APIFeatures = require("../utils/APIFeatures");
exports.getAllCourse = async (req, res) => {
  try {
    const features = new APIFeatures(Course.find(), req.query)
      .search()
      .filter()
      .tag()
      .category()
      .sort()
      .limitFields()
      .paginate();
    const getCourses = await Course.countDocuments({});
    const course = await features.query;
    res.status(200).json({
      status: "success",
      results: course.length,
      lengthDb: getCourses,
      data: course,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await Course.findById(id);
    res.status(200).json({
      status: "ok",
      data: course,
    });
  } catch (err) {
    res.status(404).json({
      status: "Not found",
      message: err,
    });
  }
};

exports.getLastestCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await Course.find().sort({ _id: -1 }).limit(10);
    res.status(200).json({
      status: "ok",
      data: course,
    });
  } catch (err) {
    res.status(404).json({
      status: "Not found",
      message: err,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Create blog sucess",
      data: newCourse,
    });
  } catch (err) {
    res.json({
      status: "Failed",
      message: err,
    });
  }
};
exports.deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Course.findByIdAndDelete(id);
    res.status(200).json({
      status: "ok",
      message: "Delete Success",
      data: response,
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err,
    });
  }
};
exports.updateCourse = async (req, res) => {
  const id = {
    _id: req.params.id,
  };
  const data = {
    tag: req.body.tag,
    image: req.body.image,
    shortScript: req.body.shortScript,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    linkDownload: req.body.linkDownload,
    view: req.body.view,
    like: req.body.like,
  };

  try {
    let response = await Course.findOneAndUpdate(id, data);
    response = await Course.findById(req.params.id);

    res.status(200).json({
      status: "ok",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
};
exports.fillCategory = async (req, res) => {
  try {
    const data = await Course.find({ category: "" });
    for (var i = 0; i < data.length; i++) {
      await Course.findByIdAndUpdate(data[i]["_id"], {
        category: "development",
      });
    }

    res.status(200).json({
      status: "ok",
      length: await Course.find({ category: "" }).length,

      data: await Course.find({ category: "" }),
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
