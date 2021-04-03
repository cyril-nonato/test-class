import { createTodo, deleteTodo } from "./todos.actions";
import { actionTypes } from "./todos.types";

test("createTodoTest", () => {
  const todo = "Do some test";

  expect(createTodo(todo)).toEqual({ type: actionTypes.CREATE_TODO, payload: { todo } })
})

test("deleteTodoTest", () => {
  
  expect(deleteTodo(10)).toEqual({ type: actionTypes.DELETE_TODO, payload: { id: 10 }})
})