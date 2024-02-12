import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as signInActions from './SignInActions';
import {connect} from 'react-redux';
import Notification from "../../components/notification/Notification";
import FacebookLogin from 'react-facebook-login';

const SignIn = ({loginRequest}) => {
  const responseFacebook = (response) => {
    loginRequest(response.accessToken);
  };

  return (
      <>
        <main className="login-page">
          <Notification/>
          <div className="login-content-wrap">
            <span className="label">PLSTD</span>
            <div className="login-content">
              <h1 className="login-title">Sign in with Facebook</h1>
              <FacebookLogin
                  appId="530642907714540"
                  fields="name,email"
                  callback={responseFacebook}
                  disableMobileRedirect={true}
                  textButton="Sign in"
                  cssClass="login-btn"
              />
            </div>
          </div>
        </main>
      </>
  );
};

SignIn.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.signInReducer.loading,
  };
}

const mapDispatchToProps = {
  loginRequest: signInActions.loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
