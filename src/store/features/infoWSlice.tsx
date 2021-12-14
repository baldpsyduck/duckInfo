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
    start:"",
    end:""
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
            state.start=action.payload.start;
            state.end=action.payload.end;
        },
        updateBackground:(state,action:PayloadAction<string>)=>{
            state.background=action.payload;
        },
        updateData:(state,action:PayloadAction<string>)=>{
            state.data=action.payload;
        },
        updateTitle:(state,action:PayloadAction<string>)=>{
            state.title=action.payload;
        },
        updateAuthID:(state,action:PayloadAction<string>)=>{
            state.authID=action.payload;
        },
        updateShowPic:(state,action:PayloadAction<string>)=>{
            state.showPic=action.payload;
        },
        updateDate:(state,action:PayloadAction<string[]>)=>{
            state.start=action.payload[0];
            state.end=action.payload[1];
        },
    },
})

export const{updateInfoW,updateData,updateBackground,updateDate,updateTitle,updateAuthID,updateShowPic}=infoWSlice.actions
export const infoW=(state:RootState)=>state.infoW
export default infoWSlice.reducer