import "./App.css";
import React from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import { getToken } from "../utils/api";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Account from "./components/Account";
import Logout from "./components/Logout";

function App() {
  const signedIn = getToken();

  return (
    <div className="wrapper">
      <nav>
        <Link to="/">Home</Link>

        {/* We can conditionally show links if logged in or not */}
        {!signedIn && <Link to="/login">Sign In</Link>}
        {signedIn && <Link to="/account">My Account</Link>}
        {signedIn && <Link to="/logout">Logout</Link>}
      </nav>

      <Route exact path="/login" component={Login} />
      {/* These routes will require an auth token to be set, due to our handy HOC */}
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
