export const getTodos = state => state.todos.items;
export const getFilter = state => state.todos.filter;

export const getVisibleTodos = state => {
  const filter = getFilter(state);
  const todos = getTodos(state);
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};
