import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {SHIPMENT_API} from "../../../api/shipment";

const initialState = {
    loading: false,
    error: null,
    message: null,
    shipments: [
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
            _id: 3,
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
        }
    ],
    shipment: null
};


const createShipment = createAsyncThunk('shipment/createShipment',
    async ({values, token, navigate}, {rejectWithValue}) => {
        try {
            const response = await SHIPMENT_API.createShipment(token, values);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });

const getShipment = createAsyncThunk('shipment/getShipment',
    async ({shipmentID, token, navigate}, {rejectWithValue}) => {
        try {
            const response = await SHIPMENT_API.getShipment(token, shipmentID);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });

const updateShipment = createAsyncThunk('shipment/updateShipment',
    async ({values, token, navigate}, {rejectWithValue}) => {
        try {
            const response = await SHIPMENT_API.createShipment(token, values);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });

const getShipments = createAsyncThunk('shipment/getShipments',
    async ({values, token, navigate}, {rejectWithValue}) => {
        try {
            const response = await SHIPMENT_API.createShipment(token, values);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });


const shipmentSlice = createSlice({
    name: 'shipment',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const SHIPMENT_ACTION_CREATORS = {createShipment, getShipments, updateShipment, getShipment};
export const selectShipment = state => state.shipment;
export default shipmentSlice.reducer;
