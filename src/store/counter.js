import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

// slice를 생성합니다.
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increaseFive(state) {
      state.counter += 5;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})


console.log("counterSlice 객체는 다음과 같이 생성됩니다: ", counterSlice);
// 슬라이스를 생성하면 각각의 리듀서 함수에 대한 액션 생성자가 만들어집니다.
// 액션 생성자와 액션 객체를 개발자가 직접 만들지 않아도 됩니다.

// 리팩토링: 컴포넌트에서 간단하게 쓸 수 있도록 구조 분해 할당합니다.
export const { increase, decrease, increaseFive, toggleCounter } = counterSlice.actions; //각 슬라이스의 actions에 생성됩니다.
export default counterSlice.reducer;