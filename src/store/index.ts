import { configureStore } from '@reduxjs/toolkit';
import meReducer from './features/meSlice';
import loginReducer from './features/loginSlice';
import locReducer from './features/locSlice';
import moveReducer from './features/moveSlice';
import projectListReducer from './features/projectListSlice';
import userListReducer from './features/userListSlice';
import projectReducer from './features/projectSlice';
import userReducer from './features/userSlice';
import topReducer from './features/topSlice';

const store = configureStore({
    reducer: {
        me: meReducer,
        login: loginReducer,
        loc: locReducer,
        move: moveReducer,
        projectList: projectListReducer,
        userList: userListReducer,
        project: projectReducer,
        user:userReducer,
        top:topReducer,
    },
}); 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store