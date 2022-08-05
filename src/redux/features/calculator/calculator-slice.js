import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    message: null,
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const CALCULATOR_ACTION_CREATORS = {};
export const selectCalculator = state => state.calculator;
export default calculatorSlice.reducer;
