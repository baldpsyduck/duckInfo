import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

interface LoginSlice{
    chooseLogin: boolean;
}

const initialState:LoginSlice={
    chooseLogin:false,
}

const loginSlice=createSlice({
    name: 'login',
    initialState,
    reducers:{
        changeLogin:(state,action:PayloadAction<boolean>)=>{
            state.chooseLogin=action.payload
        },
    },
})

export const{changeLogin}=loginSlice.actions
export const login=(state:RootState)=>state.login
export default loginSlice.reducer