import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  
  initialState: {
    user: "",
    accessToken: "",
    refreshToken: ""
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken;
    }
  }
});

//액션 처리 함수 내보내기
export const { setUser, setAccessToken, setRefreshToken } = authSlice.actions

//상태 선택 함수 내보내기
export const selectUser = (rootReducer) => rootReducer.auth.user;
export const selectAccessToken = (rootReducer) => rootReducer.auth.accessToken;
export const selectRefreshToken = (rootReducer) => rootReducer.auth.refreshToken;

//리듀서 내보내기
export default authSlice.reducer;