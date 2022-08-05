import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TRACKING_API} from "../../../api/tracking";


const track = createAsyncThunk(
    'tracking/getTracking',
    async ({
               trackingID,
               resetForm,
               setSubmitting,
               navigate,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await TRACKING_API.track(trackingID);
            resetForm();
            setSubmitting(false);
            if (navigate) {
                navigate(`/tracking/${trackingID}`);
            }
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            setSubmitting(false);
            return rejectWithValue(message);
        }
    });

const trackingSlice = createSlice({
    name: 'tracking',
    initialState: {
        shipment: null,
        shipmentLoading: false,
        shipmentMessage: null,
        shipmentError: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(track.pending, (state) => {
            state.shipmentLoading = true;
            state.shipmentError = null;
            state.shipmentMessage = null;
        }).addCase(track.fulfilled, (state, action) => {
            state.shipmentLoading = false;
            state.shipmentError = null;
            state.shipmentMessage = action.payload.message;
            state.shipment = action.payload.data;
        }).addCase(track.rejected, (state, action) => {
            state.shipmentLoading = false;
            state.shipmentError = action.payload;
            state.shipmentMessage = null;
            state.shipment = null
        })
    }
});

export const selectTracking = state => state.tracking;

export const TRACKING_ACTION_CREATORS = {track};

export default trackingSlice.reducer;
