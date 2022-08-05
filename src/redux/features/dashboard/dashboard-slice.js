import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DASHBOARD_API} from "../../../api/dashboard";


const getDashboard = createAsyncThunk(
    'dashboard/getDashboard',
    async ({
              token,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await DASHBOARD_API.getDashboard(token);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            return rejectWithValue(message);
        }
    });

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        dashboard: {
            delivered: {
                count: 8,
                percentage: 80
            },
            pending: {
                count: 1,
                percentage: 10
            },
            failed: {
                count: 1,
                percentage: 10
            },
            payment: {
                count: 8,
                amount: 40000
            },
            latestShipments: [
                {
                    _id: 1,
                    tracking: 'GS12AD3D98EA',
                    status: 'success',
                    recipient: {
                        name: 'Josef Stalin',
                        phone: '+233270048319',
                        email: 'josef.stalin.bolshevik.com'
                    },
                    totalCost: {
                        amount: 239484,
                        currency: 'USD'
                    },
                    createdAt: new Date(2022, 2, 21)
                },
                {
                    _id: 2,
                    tracking: 'GS12AD3D98EA',
                    status: 'success',
                    recipient: {
                        name: 'Leon Trotsky',
                        phone: '+233270048319',
                        email: 'leon.trotsky.bolshevik.com'
                    },
                    totalCost: {
                        amount: 209484,
                        currency: 'USD'
                    },
                    createdAt: new Date(2022, 2, 21)
                }
            ]
        },
        dashboardLoading: false,
        dashboardMessage: null,
        dashboardError: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getDashboard.pending, (state) => {
            state.dashboardLoading = true;
            state.dashboardError = null;
            state.dashboardMessage = null;
        }).addCase(getDashboard.fulfilled, (state, action) => {
            state.dashboardLoading = false;
            state.dashboardError = null;
            state.dashboardMessage = action.payload.message;
            state.dashboard = action.payload.data;
        }).addCase(getDashboard.rejected, (state, action) => {
            state.dashboardLoading = false;
            state.dashboardError = action.payload;
            state.dashboardMessage = null;
            state.dashboard = null
        })
    }
});

export const selectDashboard = state => state.dashboard;

export const DASHBOARD_ACTION_CREATORS = {getDashboard};

export default dashboardSlice.reducer;
