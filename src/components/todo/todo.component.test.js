import { render, fireEvent } from "@testing-library/react";
import TodoComponent from "./todo.component";

test("Check render for todoComponent", () => {
  const item = {
    id: 1,
    name: "Sample Todo"
  }
  const { queryByTitle } = render(<TodoComponent item={item} />);

  const span = queryByTitle("Span");
  const container = queryByTitle("TodoContainer");

  expect(span).toBeTruthy();
  expect(container).toBeTruthy();
});

test("Should show delete button", async () => {
  const item = {
    id: 1,
    name: "Sample Todo"
  }
  const { queryByTitle, findByText } = render(<TodoComponent item={item} />);

  const container = queryByTitle("TodoContainer");

  fireEvent.mouseEnter(container);

  await findByText('Delete');

});