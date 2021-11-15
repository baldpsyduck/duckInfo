import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '..';
import { cardUser } from 'types/user';

interface State {
  userList: cardUser[];
}

const initialState: State = {
  userList: [],
};

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState: initialState,
  reducers: {
    set(state, action) {
      state.userList = action.payload;
    },
    append(state, action) {
      state.userList = [...state.userList, action.payload];
    },
    clear(state) {
      state.userList = [];
    },
  },
});

export const { set, append, clear } = userListSlice.actions
export const userList = (state: RootState) => state.userList
export default userListSlice.reducer
