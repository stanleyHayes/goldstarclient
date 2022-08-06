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
    shipment: null,
    step: 1,
    recipientDetails: {
        name: '',
        phone: '',
        email: ''
    },
    shippingDetails: {
        mode: '',
        origin: {
            country: '',
            stateOrRegionOrProvince: '',
            city: '',
            addressLine1: '',
            addressLine2: '',
            postalCode: ''
        },
        destination: {
            country: '',
            stateOrRegionOrProvince: '',
            city: '',
            addressLine1: '',
            addressLine2: '',
            postalCode: ''
        }
    },
    packages: [],
    paymentDetails: {
        cardholderName: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: '',
        cardNumber: ''
    }
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
    reducers: {
        goTo: (state, action) => {
            state.step = action.payload
        },
        next: (state) => {
            state.step += 1
        },
        previous: (state) => {
            state.step -= 1
        },
        saveRecipientDetails: (state, action) => {
            state.recipientDetails = action.payload
        },
        saveShipmentDetails: (state, action) => {
            state.shipmentDetails = action.payload
        },
        savePaymentDetails: (state, action) => {
            state.paymentDetails = action.payload
        }
    },
    extraReducers: {}
});

export const SHIPMENT_ACTION_CREATORS = {createShipment, getShipments, updateShipment, getShipment, ...shipmentSlice.actions};
export const selectShipment = state => state.shipment;
export default shipmentSlice.reducer;
