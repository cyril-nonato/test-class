import { connect } from 'react-redux';
import TodosComponent from "./todos.component";

const mapStateToProps = (state) => {
  return {
    todos: state.todos.list
  }
};

const mapDispatchToProps = dispatch => ({
});

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

export default TodosContainer;