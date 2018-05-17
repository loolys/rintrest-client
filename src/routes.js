import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

import Navbar from "./Components/Navbar";
import AllPinsContainer from "./Containers/AllPinsContainer";
import RegisterContainer from "./Containers/RegisterContainer";
import LoginContainer from "./Containers/LoginContainer";
import ProfileContainer from "./Containers/ProfileContainer";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  try {
    decode(token);
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default () => (
  <BrowserRouter>
    <div>
      <Route
        path="/"
        render={props => (
          <Navbar {...props} isAuthenticated={isAuthenticated} />
        )}
      />
      <Route path="/" exact component={AllPinsContainer} />
      <Route path="/register" exact component={RegisterContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <PrivateRoute path="/profile/:user" exact component={ProfileContainer} />
    </div>
  </BrowserRouter>
);
