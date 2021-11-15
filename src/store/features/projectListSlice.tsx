import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '..';
import { cardProject } from 'types/project';

interface State {
    projectList: cardProject[];
}

const initialState: State = {
    projectList: [],
};

export const projectListSlice = createSlice({
    name: "projectListSlice",
    initialState: initialState,
    reducers: {
        set(state, action) {
            state.projectList = action.payload;
        },
        append(state, action) {
            state.projectList = [...state.projectList, action.payload];
        },
        clear(state) {
            state.projectList = [];
        },
    },
});

export const { set, append, clear } = projectListSlice.actions
export const projectList = (state: RootState) => state.projectList
export default projectListSlice.reducer
