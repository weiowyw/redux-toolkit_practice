import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + Number(action.payload);
        },
        decrement: (state, action) => {
            state.value = state.value - Number(action.payload);
        },
        reset: (state, action) => {
            state.value = 0;
        },
    }
})

export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions;