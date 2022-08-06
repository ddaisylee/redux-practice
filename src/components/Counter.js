import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase())
  }

  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>INCREASE</button>
      <button onClick={decreaseHandler}>DECREASE</button>
      <button onClick={increaseHandler}>INCREASE 5!!!</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
