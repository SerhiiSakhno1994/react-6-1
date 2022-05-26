import { connect } from 'react-redux';

import { deleteDoto } from '../../rudux/todos/todos-actions';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = state => {
//   const { filter, items } = state.todos;

//   const visibleTodos = getVisibleTodos(items, filter);

//   return {
//     todos: visibleTodos,
//   };
// };

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(deleteDoto(id)),
  onToggleCompleted: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
