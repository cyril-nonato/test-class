import todosReducer from "./todos.reducer";
import { actionTypes } from "./todos.types";

const initialState = {
  list: [
    {
      id: 1,
      name: "Do some test"
    }
  ]
};

test("todosReducer", () => {

  const actionCreate = {
    type: actionTypes.CREATE_TODO,
    payload: {
      todo: "Another testing"
    }
  }

  const actionDelete = {
    type: actionTypes.DELETE_TODO,
    payload: {
      id: 1
    }
  }

  const actionDelete2 = {
    type: actionTypes.DELETE_TODO,
    payload: {
      id: 2
    }
  }

  const actionInvalidType = {
    type: "UPDATE_TODO",
    payload: {
      todo: "Update"
    }
  }

  expect(todosReducer(initialState, actionCreate)).toEqual({
    ...initialState,
    list: [
      ...initialState.list,
      {
        id: 2,
        name: actionCreate.payload.todo
      }
    ]
  });

  expect(todosReducer(initialState, actionCreate)).toEqual({
    ...initialState,
    list: [
      ...initialState.list,
      {
        id: 2,
        name: actionCreate.payload.todo
      }
    ]
  });

  expect(todosReducer(initialState, actionDelete)).toEqual({
    ...initialState,
    list: []
  });

  expect(todosReducer(initialState, actionDelete2)).toEqual({
    ...initialState,
    list: [
      ...initialState.list
    ]
  });

  expect(todosReducer(initialState, actionInvalidType)).toEqual(initialState);
})