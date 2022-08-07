import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;