import { render, fireEvent } from "@testing-library/react";
import LogoutComponent from "./logout.component";

test("check render method for logoutComponent", () => {
  const { queryByTitle } = render(<LogoutComponent />);

  const logout = queryByTitle("Logout");

  expect(logout).toBeTruthy();

});

test("check onClick event", () => {
  const mock = jest.fn();

  const { queryByTitle } = render(<LogoutComponent signOutRequest={mock} />);

  const logout = queryByTitle("Logout");

  fireEvent.click(logout);

  expect(mock).toHaveBeenCalled();
});

