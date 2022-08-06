//스토어를 생성하기 위한 함수를 불러옵니다.
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true }
// counter state를 변경하기 위한 리듀서 함수를 만듭니다.
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREASE') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'DECREASE') {
    return {
      counter: state.counter - action.value,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'TOGGLE') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }
  return state;
}

// 리듀서를 연결해 스토어를 생성합니다.
const store = createStore(counterReducer);

export default store;