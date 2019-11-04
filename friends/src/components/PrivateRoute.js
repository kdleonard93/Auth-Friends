import React from "react";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    ></Route>
  );
}

export default PrivateRoute;
