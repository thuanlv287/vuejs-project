import axios from "axios";

const baseDomain = "https://jsonplaceholder.typicode.com/albums/1";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
})