import { filterTodos } from "./todos.helper"

test("filterTodosTest", () => {
  const state = {
    list: [
      {
        id: 1,
        name: "Todo"
      }
    ]
  }

  expect(filterTodos(state, 1)).toEqual([]);

  expect(filterTodos(state, 5)).toEqual([ {id: 1, name: "Todo"} ]);
})