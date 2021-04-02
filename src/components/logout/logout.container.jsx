import { connect } from 'react-redux';
import { signOutRequest } from "../../redux/auth/auth.actions";
import LogoutComponent from "./logout.component";

const mapDispatchToProps = dispatch => ({
  signOutRequest: () => dispatch(signOutRequest())
});

const LogoutContainer = connect(null, mapDispatchToProps)(LogoutComponent);

export default LogoutContainer;