import { useSelector, useDispatch } from 'react-redux';
//구조분헤할당한 이름으로 사용할 수 있습니다.
import { increase, decrease, increaseFive, toggleCounter } from '../store/counter';
import styled from 'styled-components';

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
    <StyledMain>
      <StyledH1>Redux Counter</StyledH1>
      {showCounter && <StyledValue>{counter}</StyledValue>}
      <StyledButton onClick={increaseHandler}>INCREASE</StyledButton>
      <StyledButton onClick={decreaseHandler}>DECREASE</StyledButton>
      <StyledButton onClick={increaseFiveHandler}>INCREASE 5</StyledButton>
      <StyledButton onClick={toggleCounterHandler}>Toggle Counter</StyledButton>
    </StyledMain>
  );
};

export default Counter;

const StyledMain = styled.main`
    margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`

const StyledH1 = styled.h1`
  text-transform: uppercase;
  color: #575757;
  margin: 0;
  font-size: 1rem;
`

const StyledValue = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`

const StyledButton = styled.button`
  margin: 1rem;
`