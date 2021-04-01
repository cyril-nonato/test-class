import LoginComponent from "./login.component";
import { connect } from 'react-redux';
import { signInRequest } from "../../redux/auth/auth.actions";

const mapStateToProps = (state) => {
  return {
    auth: state.auth.creds,
    error: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
    authCreds: state.auth.authCreds
  }
};

const mapDispatchToProps = dispatch => ({
  signInRequest: (creds) => dispatch(signInRequest(creds))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;