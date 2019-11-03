import React, { useState } from "react";
import api from "../utils/api";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
      setData([
          ...data,
          [e.target.username]: e.target.value
      ])
  }

  const handleSubmit = e => {
    e.preventDefault()

    api()
        .post("/login", data)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch((error) => {
            console.log("Error:", error)
            setError(error.res.data.message)
        })
  }

  return (
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
