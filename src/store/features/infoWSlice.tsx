import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import { createBrowserHistory } from "history";

interface InfoWSlice{
    data: string;
    background: string;
}

const initialState:InfoWSlice={
    data:"",
    background:"",
}

const infoWSlice=createSlice({
    name: 'infos',
    initialState,
    reducers:{
        updateInfoW:(state,action:PayloadAction<InfoWSlice>)=>{
            state.data=action.payload.data;
            state.background=action.payload.background;
        },
        updateBackground:(state,action:PayloadAction<string>)=>{
            state.background=action.payload;
        },
        updateData:(state,action:PayloadAction<string>)=>{
            state.data=action.payload;
        },
    },
})

export const{updateInfoW,updateData,updateBackground}=infoWSlice.actions
export const infoW=(state:RootState)=>state.infoW
export default infoWSlice.reducer