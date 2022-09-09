import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

console.log("authSlice 객체는 다음과 같이 생성됩니다: ", authSlice);

export const authActions = authSlice.actions;
export default authSlice.reducer;