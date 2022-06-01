import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../rudux/counter/counter-action';
import Controls from './Controls';
import Value from './Value';
import { getValue, getStep } from '../../rudux/counter/counter-selectors';
import './Counter.css';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
}
