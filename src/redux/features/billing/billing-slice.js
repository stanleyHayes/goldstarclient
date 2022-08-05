import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    message: null,
    billings: [],
    billing: null
};

const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const BILLING_ACTION_CREATORS = {};
export const selectBilling = state => state.billing;
export default billingSlice.reducer;
