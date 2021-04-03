
import { connect } from 'react-redux';
import HomePage from './home-page.component';

const mapStateToProps = (state) => {
  return {
    auth: state.auth.creds,
    authenticated: state.auth.authenticated
  }
};

const mapDispatchToProps = dispatch => ({
  // signInRequest: (creds) => dispatch(signInRequest(creds))
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;