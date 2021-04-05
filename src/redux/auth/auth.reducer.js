import { checkAuthCredsToCreds, checkRegexPassword, checkRegexUsername } from "./auth.helper";
import { actionTypes } from "./auth.types";

export const initialState = {
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

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      
      const {username, password} = action.payload;

      // Requires the user to fill up the form
      if(!username && !password) {
        return {
          ...state,
          error: true,
          message: "Please input both of your username and password"
        }
      }

      const creds = {
        username,
        password
      };

      const checkPassword = checkRegexPassword(password);

      const checkUsername = checkRegexUsername(username);

      if(!checkUsername) {
        return {
          ...state,
          error: true,
          message: `Username is invalid, please use alpha numeric characters`,
        }
      }

      // Returns error if password contains invalid characters
      if(checkPassword) {
        return {
          ...state,
          error: true,
          message: `Passwords with characters "&^$#" are not allowed`,
        }
      }


      const bool = checkAuthCredsToCreds(creds, state.authCreds);

      // If the creds don't match to the auth creds
      if(!bool) {
        return {
          ...state,
          message: "Username / Password is invalid",
          error: true
        }
      };

      localStorage.setItem("username", username);
      localStorage.setItem("password", password)

      return {
        ...state,
        message: "Login successful",
        authenticated: true,
        error: false,
        creds: {
          username,
          password
        }
      }
    case actionTypes.SIGN_OUT_REQUEST:

    localStorage.clear();
    
      return {
        ...state,
        creds: {
          username: "",
          password: ""
        },
        message: "Logout successful",
        authenticated: false,
        error: false,
      }
    default: return state;
  }
}
export default authReducer;