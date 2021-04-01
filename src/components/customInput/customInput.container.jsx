import { connect } from 'react-redux';
import { createTodo } from '../../redux/todos/todos.actions';
import CustomInputComponent from './customInput.component';

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo))
});

const TodoContainer = connect(null, mapDispatchToProps)(CustomInputComponent);

export default TodoContainer;