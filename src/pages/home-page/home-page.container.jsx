
import { connect } from 'react-redux';
import HomePage from './home-page.component';

const mapStateToProps = (state) => {
  return {
    auth: state.auth.creds,
    error: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  }
};

const mapDispatchToProps = dispatch => ({
  // signInRequest: (creds) => dispatch(signInRequest(creds))
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;