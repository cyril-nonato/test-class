import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer';
import todosReducer from './todos/todos.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;