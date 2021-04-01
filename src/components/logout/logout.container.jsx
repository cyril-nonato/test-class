import { connect } from 'react-redux';
import { signOutRequest } from "../../redux/auth/auth.actions";
import LogoutComponent from "./logout.component";

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth.creds,
//     error: state.auth.error,
//     message: state.auth.message,
//     authenticated: state.auth.authenticated
//   }
// };

const mapDispatchToProps = dispatch => ({
  signOutRequest: () => dispatch(signOutRequest())
});

const LogoutContainer = connect(null, mapDispatchToProps)(LogoutComponent);

export default LogoutContainer;