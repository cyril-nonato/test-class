import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginComponent from "./login.component";

const authCreds = {
  username: "myaccount",
  password: "123456"
}

test("Rendering of Login without user", () => {
  const { queryByTitle } = render(<LoginComponent authenticated={false} authCreds={authCreds} />, { wrapper: MemoryRouter })

  const login = queryByTitle("Login");
  const username = queryByTitle("Username");
  const password = queryByTitle("Password");
  const form = queryByTitle("Form");
  const error = queryByTitle("Error");


  expect(login).toBeTruthy();
  expect(username).toBeTruthy();
  expect(password).toBeTruthy();
  expect(form).toBeTruthy();
  expect(error).toBeFalsy();
});

test("Render error", () => {
  const { queryByTitle } = render(<LoginComponent authenticated={false} authCreds={authCreds} error={true} />, { wrapper: MemoryRouter })

  const error = queryByTitle("Error");

  expect(error).toBeTruthy();

})

test("Rendering of Login with user", () => {
  const { queryByTitle } = render(<LoginComponent authenticated={true} authCreds={authCreds} />, { wrapper: MemoryRouter })

  const login = queryByTitle("Login");

  expect(login).toBeFalsy();
});

test("on change values for username and login", () => {
  const { queryByTitle } = render(<LoginComponent authenticated={false} authCreds={authCreds} />, { wrapper: MemoryRouter })

  const username = queryByTitle("Username");
  const password = queryByTitle("Password");

  fireEvent.change(username, { target: { value: "myaccount" }});
  fireEvent.change(password, { target: { value: "123456" }});

  expect(username.value).toBe("myaccount");
  expect(password.value).toBe("123456");
});

test("on submit event", () => {
  const mock = jest.fn();
  const { queryByTitle } = render(<LoginComponent authenticated={false} authCreds={authCreds} signInRequest={mock} />, { wrapper: MemoryRouter })
  
  const username = queryByTitle("Username");
  const password = queryByTitle("Password");
  const form = queryByTitle("Form");
  
  fireEvent.change(username, { target: { value: "myaccount" }});
  fireEvent.change(password, { target: { value: "123456" }});

  fireEvent.submit(form);

  expect(mock).toHaveBeenCalled();

});

