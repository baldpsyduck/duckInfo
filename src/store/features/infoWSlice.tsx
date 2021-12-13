import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {info} from 'types/inform'

const initialState:info={
    data:"",
    background:"",
    title:"",
    authID:"",
    permittedID:[],
    showPic:"",
    id:"",
}

const infoWSlice=createSlice({
    name: 'infos',
    initialState,
    reducers:{
        updateInfoW:(state,action:PayloadAction<info>)=>{
            state.data=action.payload.data;
            state.background=action.payload.background;
            state.title=action.payload.title;
            state.authID=action.payload.authID;
            state.permittedID=action.payload.permittedID;
            state.id=action.payload.id;
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