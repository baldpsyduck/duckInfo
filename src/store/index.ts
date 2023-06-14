import { configureStore } from '@reduxjs/toolkit';
import meReducer from './features/meSlice';
import loginReducer from './features/loginSlice';
import locReducer from './features/locSlice';
import moveReducer from './features/moveSlice';
import userListReducer from './features/userListSlice';
import userReducer from './features/userSlice';
import topReducer from './features/topSlice';
import infoWReducer from './features/infoWSlice';
import infosReducer from './features/infosSlice';

const store = configureStore({
    reducer: {
        me: meReducer,
        login: loginReducer,
        loc: locReducer,
        move: moveReducer,
        userList: userListReducer,
        user:userReducer, 
        top:topReducer,
        infoW:infoWReducer,
        infos:infosReducer
    },
}); 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store