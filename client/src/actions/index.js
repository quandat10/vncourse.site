import APICourse from "../apis/APICourse";
import APIAdmin from "../apis/APIAdmin";

export const getAllCourse = (sort, limit, page,search) => async (dispatch) => {
  const response = await APICourse.get("/courses", {
    params: {
      sort: sort,
      limit: limit,
      page: page,
      search:search
    },
  });
  return dispatch({
    type: "GET_COURSES",
    payload: response,
  });
};
export const getByCategory = (category, tag) => async (dispatch) => {
  const response = await APICourse.get("/courses", {
    params: {
      category: category,
      tag: tag,
    },
  });
  return dispatch({
    type: "GET_BY_CATEGORY",
    payload: response,
  });
};
export const getManyCourse = (limit, page) => async (dispatch) => {
  const response = await APICourse.get("/courses", {
    params: {
      limit: limit,
      page: page,
    },
  });
  return dispatch({
    type: "GET_MANY_COURSES",
    payload: response,
  });
};
export const getCourse = (id) => async (dispatch) => {
  const res = await APICourse.get(`/courses/${id}`);
  return dispatch({
    type: "FETCH_A_COURSE",
    payload: res.data,
  });
};
export const GetToken = (username, password) => async (dispatch) => {
  const response = await APIAdmin.post("/login", {
    username: username,
    password: password,
  });
  dispatch({
    type: "FETCH_LOGIN",
    payload: response,
  });
};
export const createCourse = (
  tags,
  createBy,
  shortScript,
  title,
  content,
  image,
  token,
  linkDownload,
  category
) => async (dispatch) => {
  const data = {
    tag: tags,
    createBy: createBy,
    shortScript: shortScript,
    title: title,
    content: content,
    image: image,
    linkDownload: linkDownload,
    category: category,
  };
  const response = await APIAdmin.post("/courses", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: "CREATE_COURSE",
    payload: response,
  });
};
export const updateCourse = (
  id,
  tags,
  createBy,
  shortScript,
  title,
  content,
  image,
  token,
  linkDownload,
  category,
  view,
  like
) => async (dispatch) => {
  const data = {
    tag: tags,
    createBy: createBy,
    shortScript: shortScript,
    title: title,
    content: content,
    image: image,
    linkDownload: linkDownload,
    category: category,
    view: view,
    like: like,
  };
  const res = await APIAdmin.post(`/course/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: "UPDAE_A_COURSE",
    payload: res.data,
  });
};
export const deleteCourse = (id, token) => async (dispatch) => {
  const res = await APIAdmin.delete(`/course/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: "DELETE_COURSE",
    payload: res.data,
  });
};
export const searchCourse = (search) => async (dispatch) => {
  const response = await APICourse.get("/courses", {
    params: {
      search: search,
    },
  });
  return dispatch({
    type: "SEARCH",
    payload: response.data,
  });
};
