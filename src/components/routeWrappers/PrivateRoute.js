import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import { COOKIES } from "../../services/Constants";

const PrivateRoute = ({ component: Component, withSideBar = false, ...rest }) => {
  // const isLoggedIn = Cookie.get('accessToken');
  const isLoggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  withSideBar: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

export default PrivateRoute;
