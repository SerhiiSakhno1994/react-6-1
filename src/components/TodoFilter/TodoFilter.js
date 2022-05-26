import { connect } from 'react-redux';

import './TodoFilter.css';
import { changeFilter } from '../../rudux/todos/todos-actions';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
