import React, { Component } from 'react';
import Container from '../components/Container/Container';
import TodoList from '../components/TodoList/TodoList';
import TodoEditor from '../components/TodoEditor/TodoEditor';
import Stats from '../components/Stats/Stats';
import Filter from '../components/TodoFilter/TodoFilter';
import Modal from '../components/Modal/Modal';
import IconButton from '../components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }

  //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //     this.toggleModal();
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));

  //   // this.toggleModal();
  // };

  // deleteTodo = todoId => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.filter(({ id }) => id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.map(todo =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  //     ),
  //   }));
  // };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // getVisibleTodos = () => {
  //   const { filter, todos } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(({ text }) =>
  //     text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}

        {/* TODO: вынести в отдельный компонент */}
        {/* <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div> */}
        <Stats />

        <Filter />

        <TodoList />
      </Container>
    );
  }
}

export default TodosView;
