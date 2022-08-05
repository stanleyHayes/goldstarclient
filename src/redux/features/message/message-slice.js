import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MESSAGE_API} from "../../../api/contact";


const sendMessage = createAsyncThunk(
    'messages/sendMessage',
    async ({
               values,
               resetForm,
               setSubmitting,
               navigate,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await MESSAGE_API.sendMessage({...values});
            resetForm();
            setSubmitting(false);
           showMessage(response.data.message, {variant: 'success'});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            setSubmitting(false);
            return rejectWithValue(message);
        }
    });

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messageLoading: false,
        messageMessage: null,
        messageError: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(sendMessage.pending, (state) => {
            state.messageLoading = true;
            state.messageError = null;
            state.messageMessage = null;
        }).addCase(sendMessage.fulfilled, (state, action) => {
            state.messageLoading = false;
            state.messageError = null;
            state.messageMessage = action.payload.message;
            state.message = action.payload.data;
        }).addCase(sendMessage.rejected, (state, action) => {
            state.messageLoading = false;
            state.messageError = action.payload;
            state.messageMessage = null;
            state.message = null
        })
    }
});

export const selectMessage = state => state.message;

export const MESSAGE_ACTION_CREATORS = {sendMessage};

export default messageSlice.reducer;
