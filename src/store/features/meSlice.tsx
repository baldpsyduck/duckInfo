import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { user as userType } from "types/user";

const initialState: { data: userType } = {
  data: {
    SESSIONID: "",
    username: "",
    authority: 0,
    email: "",
    avatar: "",
  },
};

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    updateMe: (state, action: PayloadAction<userType>) => {
      state.data = action.payload; 
    },
    updateID: (state, action: PayloadAction<string>) => {
      state.data.SESSIONID = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.data.username = action.payload;
    },
    updateAvatar: (state, action: PayloadAction<string>)=>{
      state.data.avatar = action.payload;
    }
  },
});

export const { updateMe, updateID, updateUsername,updateAvatar } = meSlice.actions;
export const me = (state: RootState) => state.me;
export default meSlice.reducer;
