import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import { createBrowserHistory } from "history";

const history=createBrowserHistory();

interface LocSlice{
    location: any;
}

const initialState:LocSlice={
    location:history.location.pathname,
}

const locSlice=createSlice({
    name: 'location',
    initialState,
    reducers:{
        updateLoc:(state,action:PayloadAction<string>)=>{
            state.location=action.payload;
        }
    },
})

export const{updateLoc}=locSlice.actions
export const loc=(state:RootState)=>state.loc
export default locSlice.reducer