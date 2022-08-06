import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  // name: 액션의 경로
  name: 'counter',
  // 초기 state
  initialState,
  // reducers: reducer를 담는 객체
  // 각각의 값이 reducer입니다.
  reducers: {
    // a
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;
export const counterActions = counterSlice.actions;