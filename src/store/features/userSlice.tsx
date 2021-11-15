import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { user as userType } from "types/user";

const initialState: { data: userType } = {
  data: {
    SESSIONID: "",
    username: "",
    authority: 0,
    email: "",
  },
};

const meSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<userType>) => {
      state.data = action.payload;
    },
    updateID: (state, action: PayloadAction<string>) => {
      state.data.SESSIONID = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.data.username = action.payload;
    },
  },
});

export const { updateUser, updateID, updateUsername } = meSlice.actions;
export const user = (state: RootState) => state.user;
export default meSlice.reducer;
