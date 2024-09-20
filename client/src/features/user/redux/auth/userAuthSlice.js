import { createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, clearAccessToken } = userAuthSlice.actions;
export default userAuthSlice.reducer;
