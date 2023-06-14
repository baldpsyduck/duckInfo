import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { info } from "types/inform";

const initialState: { data: info[] } = { data: [] };

const infosSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {
    push: (state, action: PayloadAction<info>) => {
      state.data = state.data.filter((info) => {
        if (info.id !== action.payload.id) 
        return info;
      });
        state.data = [...state.data, action.payload];
    },
  },
});

export const { push } = infosSlice.actions;
export const infos = (state: RootState) => state.infos;
export default infosSlice.reducer;
