import { useSelector, useDispatch } from 'react-redux';

import { deleteDoto, toggleCompleted } from '../../rudux/todos/todos-actions';
import Todo from '../Todo/Todo';
import { getVisibleTodos } from '../../rudux/todos/todos-selectors';
import './TodoList.css';

export default function TodoList() {
  // const todos = useSelector(state =>
  //   getVisibleTodos(state.todos.items, state.todos.filter),
  // );
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(deleteDoto(id));
  const onToggleCompleted = id => dispatch(toggleCompleted(id));

  return (
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
}

// const TodoList1 = ({ todos, onDeleteTodo, onToggleCompleted }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li key={id} className="TodoList__item">
//         <Todo
//           text={text}
//           completed={completed}
//           onToggleCompleted={() => onToggleCompleted(id)}
//           onDelete={() => onDeleteTodo(id)}
//         />
//       </li>
//     ))}
//   </ul>
// );

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allTodos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ todos: { items, filter } }) => ({
//   todos: getVisibleTodos(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(deleteDoto(id)),
//   onToggleCompleted: id => dispatch(toggleCompleted(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
