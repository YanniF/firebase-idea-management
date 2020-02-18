import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const RedirectIfLoggedIn = ({ auth, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => !auth.uid ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(RedirectIfLoggedIn);
