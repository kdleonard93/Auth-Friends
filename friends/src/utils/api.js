import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
}
