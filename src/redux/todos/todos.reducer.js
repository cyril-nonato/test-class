import { filterTodos } from "./todos.helper";
import { actionTypes } from "./todos.types";

const initialState = {
  list: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      const todosCopy = [...state.list];
      const todoObject = {
        id: state.list.length + 1,
        name: action.payload.todo
      }
      return {
        ...state,
        list: [
          ...todosCopy,
          todoObject
        ]
      }
    case actionTypes.DELETE_TODO:
      const filteredTodos = filterTodos(state, action.payload.id)
      // console.log(filteredTodos);
      return {
        ...state,
        list: filteredTodos
      }

    default: return state;
  }
}

export default todosReducer;