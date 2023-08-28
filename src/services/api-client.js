import axios from "axios";

const server_url = import.meta.env.VITE_SERVER_URL;
const node_env = import.meta.env.VITE_NODE_ENV;
const baseURL = node_env === "development" ? "/api" : server_url;

export default axios.create({
  baseURL,
});
