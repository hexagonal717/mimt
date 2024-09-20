import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState: {
    userDataList: [],
  },
  reducers: {
    addUserData: (state, action) => {
      state.userDataList.push(action.payload);
    },
  },
});
export const { addUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
