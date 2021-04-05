import { checkAuthCredsToCreds, checkRegexPassword, checkRegexUsername } from "./auth.helper";

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

test("checkRegexPasswordTest", () => {
  
  expect(checkRegexPassword(123456)).toBeFalsy();

  expect(checkRegexPassword("123^")).toBeTruthy();
  
  expect(checkRegexPassword("^$%&#")).toBeTruthy();
})

test("checkRegexUsernameTest", () => {
  expect(checkRegexUsername("#43w54")).toBeFalsy();
  expect(checkRegexUsername("username")).toBeTruthy();
})