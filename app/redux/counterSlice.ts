import {createSlice,Slice} from '@reduxjs/toolkit';

interface IState{
    value : number;
}

const initialState: IState = {
    value : 0
}

const counterSlice = createSlice({
    name :'counter',
    initialState,
    reducers: {
        increment : (state : IState) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        }
    }
})

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer; 