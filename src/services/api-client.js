import axios from "axios";

export default axios.create({
  baseURL: "/api",
  // baseURL: import.meta.env.VITE_SERVER_URL,
});
