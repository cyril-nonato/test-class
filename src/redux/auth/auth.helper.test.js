import { checkAuthCredsToCreds, checkRegex } from "./auth.helper";

test("checkAuthCredsToCredsTest", () => {
  const authCreds = {
    username: "User",
    password: 123456
  };

  const creds = {
    username: "User",
    password: 123456
  };

  const wrongCreds = {
    username: "Users",
    password: 123456
  }

  expect(checkAuthCredsToCreds(creds, authCreds)).toBeTruthy();

  expect(checkAuthCredsToCreds(wrongCreds, authCreds)).toBeFalsy();
});

test("checkRegexTest", () => {
  
  expect(checkRegex(123456)).toBeFalsy();

  expect(checkRegex("123^")).toBeTruthy();
  
  expect(checkRegex("^$%&#")).toBeTruthy();
})