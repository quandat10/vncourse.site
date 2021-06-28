import axios from 'axios';
export default axios.create({
  baseURL:"/api/v1/admin",
  config: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})
