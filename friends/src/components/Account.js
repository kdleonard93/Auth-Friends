import React from "react";

function Account(props) {
  const [user, setUser] = useState({
    name: "",
    username: ""
  });

  useEffect(() => {
    api()
      .get("/me")
      .then(result => {
        setUser({
          name: result.data.name,
          username: result.data.username
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>My Account</h1>

      <div className="account-row">Name: {user.name}</div>
      <div className="account-row">Email: {user.email}</div>
    </>
  );
}

export default Account;
