import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/todos/todos.actions';
import TodoComponent from './todo.component';

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
});

const TodoContainer = connect(null, mapDispatchToProps)(TodoComponent);

export default TodoContainer;