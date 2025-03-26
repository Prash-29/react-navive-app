import { createSlice, Slice } from "@reduxjs/toolkit";

interface NameState {
    name: string;
}

const initialState : NameState = {
    name: 'Prashanht'
}

const nameSlice :Slice = createSlice({
    name: 'namer',
    initialState,
    reducers: {
        setName : (state : NameState, action) => {
            state.name = action.payload;
        }
    }
})

export const { setName } = nameSlice.actions;   

export default nameSlice.reducer;