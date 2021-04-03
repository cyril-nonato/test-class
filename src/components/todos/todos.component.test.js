import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import TodosComponent from "./todos.component";

const mockStore = configureMockStore();
const store = mockStore({});

test("Check render for todosComponent", () => {

  const todos = [
    {
      id: 1,
      name: "To do Tests"
    }
  ]
  const { queryByTitle } = render(
    <Provider store={store}>
      <TodosComponent todos={todos} />
    </Provider>
  )

  const container = queryByTitle("Container");

  expect(container).toBeTruthy();
  
});
