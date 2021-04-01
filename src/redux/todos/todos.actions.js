import { actionTypes } from "./todos.types"

export const createTodo = (todo) => {
  return {
    type: actionTypes.CREATE_TODO,
    payload: {
      todo
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id
    }
  }
}