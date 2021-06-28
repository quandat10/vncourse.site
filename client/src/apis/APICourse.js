import axios from "axios";
export default axios.create({
  baseURL: "/api/v1/",
  config: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
