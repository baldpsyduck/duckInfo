import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface MoveSlice {
    initalC: [number, number];
    clientC: [number, number];
    selected: boolean;
}

const initialState: MoveSlice = {
    initalC: [0, 0],
    clientC: [0, 0],
    selected: false,
}

const moveSlice = createSlice({
    name: 'move',
    initialState,
    reducers: {
        setInitalC: (state, action: PayloadAction<[x: number, y: number]>) => {
            state.initalC = action.payload
        },
        setClientC: (state, action: PayloadAction<[x: number, y: number]>) => {
            state.clientC = action.payload
        },
        setSelected: (state, action: PayloadAction<boolean>) => {
            state.selected = action.payload
        }
    },
})

export const { setInitalC, setClientC,setSelected } = moveSlice.actions
export const move = (state: RootState) => state.move
export default moveSlice.reducer