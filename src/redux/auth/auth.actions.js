import { actionTypes } from "./auth.types"

// Handles sign in requests
export const signInRequest = (parameters) => {
  const {username, password} = parameters
  return {
    type: actionTypes.SIGN_IN_REQUEST,
    payload: {
      username,
      password
    }
  }
}

// Handles sign out requests
export const signOutRequest = () => {
  return {
    type: actionTypes.SIGN_OUT_REQUEST
  }
}