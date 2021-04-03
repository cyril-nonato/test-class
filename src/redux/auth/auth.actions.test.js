import { signInRequest, signOutRequest } from "./auth.actions";
import { actionTypes } from "./auth.types";

test("signInRequestTest", () => {
  const parameter = {
    username: "myaccount",
    password: 123456
  };

  expect(signInRequest(parameter)).toEqual({
    type: actionTypes.SIGN_IN_REQUEST,
    payload: parameter
  });

});

test("signOutRequest", () => {
  
  expect(signOutRequest()).toEqual({
    type: actionTypes.SIGN_OUT_REQUEST
  })
})