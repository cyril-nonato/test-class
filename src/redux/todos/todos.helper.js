export const filterTodos = (state, id) => {
  return state.list.filter(todo => todo.id !== id);
}