import { render, fireEvent } from "@testing-library/react";
import CustomInputComponent from "./customInput.component";

test("checkCustomInputRender", () => {
  const { queryByTitle } = render(<CustomInputComponent />);

  const input = queryByTitle("InputField");
  const button = queryByTitle("AddButton");
  const form = queryByTitle("Form");

  expect(input).toBeTruthy();
  expect(button).toBeTruthy();
  expect(form).toBeTruthy();

});

describe("changeInputValue", () => {
  test("onChange", () => {
    const { queryByTitle } = render(<CustomInputComponent />);

    const input = queryByTitle("InputField");

    fireEvent.change(input, { target: { value: "Add some test" }});

    expect(input.value).toBe("Add some test")
  })
});

describe("clickButtonWithValue", () => {

  test("onClick", () => {
    const mock = jest.fn();
    const { queryByTitle } = render(<CustomInputComponent createTodo={mock} />);
    const form = queryByTitle("Form");
  
    const input = queryByTitle("InputField");

    fireEvent.change(input, { target: { value: "Add some test" }});

    fireEvent.submit(form);

    expect(mock).toHaveBeenCalled();

  })

});

describe("clickButtonWithoutValue", () => {

  test("onClick", () => {
    const mock = jest.fn();
    const { queryByTitle } = render(<CustomInputComponent createTodo={mock} />);
    const form = queryByTitle("Form");
  
    const input = queryByTitle("InputField");

    fireEvent.change(input, { target: { value: "" }});

    fireEvent.submit(form);

    expect(mock).toHaveBeenCalledTimes(0);

  })

});