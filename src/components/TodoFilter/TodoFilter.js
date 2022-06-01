import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../rudux/todos/todos-selectors';
import './TodoFilter.css';
import { changeFilter } from '../../rudux/todos/todos-actions';

export default function TodoFilter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
