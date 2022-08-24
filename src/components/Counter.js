import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
//구조분헤할당한 이름으로 사용할 수 있습니다.
import { increase, decrease, increaseFive, toggleCounter } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const increaseHandler = () => {
    // counterSlice.increase 대신에 사용할 수 있습니다.
    dispatch(increase())
  }

  const decreaseHandler = () => {
    dispatch(decrease());
  }

  const increaseFiveHandler = () => {
    dispatch(increaseFive(5));
  }

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>INCREASE</button>
      <button onClick={decreaseHandler}>DECREASE</button>
      <button onClick={increaseFiveHandler}>INCREASE 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
