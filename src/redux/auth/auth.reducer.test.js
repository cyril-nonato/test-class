import { signInRequest } from "./auth.actions"
import authReducer from "./auth.reducer"

const initialState = {
  creds: {
    username: "",
    password: ""
  },
  authCreds: {
    username: "myaccount",
    password: "123456"
  },
  message: '',
  authenticated: false,
  error: false
}

test("authReducerTest", () => {

  const credsParameterNoUsernameAndPassword = {
    username: "",
    password: ""
  };

  const credsParameterInvalidCharactersPassword = {
    username: "myaccount",
    password: "123456^%$"
  };

  const credsParameterWithWrongPassword = {
    username: "myaccount",
    password: "123456789"
  }

  const credsParameterWithWrongUsername = {
    username: "myaccount123",
    password: "123456"
  }

  const credsParameterCorrect = {
    username: "myaccount",
    password: "123456"
  }

  expect(authReducer(initialState, signInRequest(credsParameterNoUsernameAndPassword))).toEqual({
    ...initialState,
    error: true,
    message: "Please input both of your username and password"
  });

  expect(authReducer(initialState, signInRequest(credsParameterInvalidCharactersPassword))).toEqual({
    ...initialState,
    error: true,
    message: `Passwords with characters "&^$#" are not valid`,
  });

  expect(authReducer(initialState, signInRequest(credsParameterWithWrongPassword))).toEqual({
    ...initialState,
    error: true,
    message: "Username / Password is invalid",
  });

  expect(authReducer(initialState, signInRequest(credsParameterWithWrongUsername))).toEqual({
    ...initialState,
    error: true,
    message: "Username / Password is invalid",
  });

  expect(authReducer(initialState, signInRequest(credsParameterCorrect))).toEqual({
    ...initialState,
    message: "Login successful",
    authenticated: true,
    error: false,
    creds: {
      username: credsParameterCorrect.username,
      password: credsParameterCorrect.password
    }
  });
})