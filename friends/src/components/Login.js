import React, { useState } from "react";

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

  return (
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
