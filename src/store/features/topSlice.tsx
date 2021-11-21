import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

interface TopSlice{
    chooseTop: boolean;
}

const initialState:TopSlice={
    chooseTop:false,
}

const topSlice=createSlice({
    name: 'top',
    initialState,
    reducers:{
        changeTop:(state,action:PayloadAction<boolean>)=>{
            state.chooseTop=action.payload
        },
    },
})

export const{changeTop}=topSlice.actions
export const top=(state:RootState)=>state.top
export default topSlice.reducer