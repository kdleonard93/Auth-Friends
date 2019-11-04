import React, { useState } from "react";
import api from "../utils/api";

function Login() {
  const [error, setError] = useState();
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    api()
      .post("/login", data)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch(error => {
        console.log("Error:", error);
        setError(error.res.data.message);
      });
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
