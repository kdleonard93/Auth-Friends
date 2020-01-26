import React from "react";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  // return (
  //   <Route
  //     {...rest}
  //     render={renderProps => {
  //       if (localStorage.getItem("token")) {
  //         return <Component {...renderProps} />;
  //       } else {
  //         return <Redirect to="/login" />;
  //       }
  //     }}
  //   ></Route>
  // );
  if (localStorage.getItem("token")) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default PrivateRoute;
