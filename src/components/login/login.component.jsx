import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import * as S from './login.styled';

class LoginComponent extends Component {

  state = {
    username: "",
    password: ""
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signInRequest(this.state);
  } 

  componentDidMount() {
    const { username, password } = this.props.authCreds;

    const checkLocalUsername = localStorage.getItem("username");
    const checkLocalPassword = localStorage.getItem("password");

    // Persist users session if the creds is correct
    if(checkLocalPassword === password && checkLocalUsername === username) {
      this.props.signInRequest(this.props.authCreds);
    }
  }

  render() {
    const { authenticated, error, message } = this.props;

    // Redirect user if all the creds information is correct
    if(authenticated) {
      return <Redirect to="/" />
    }

    return (
      <S.Container>
      <S.InnerContainer>
        <S.Form onSubmit={this.handleSubmit} title="Form">
          <S.Input value={this.state.username} onChange={e => this.handleUsername(e)} placeholder="Username" title="Username" />
          <S.Input value={this.state.password} onChange={e => this.handlePassword(e)} placeholder="Password" title="Password" />
          <S.Button onSubmit={this.handleSubmit} type="submit" title="Login">Login</S.Button>
        </S.Form>
        {
          error ?
          <S.Error title="Error">
            {
              message
            }
          </S.Error>
          : null
        }
      </S.InnerContainer>
      </S.Container>
    )
  }
}
 
export default LoginComponent;