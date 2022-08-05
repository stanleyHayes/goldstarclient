import {createSlice} from "@reduxjs/toolkit";
import {CONSTANTS} from "../../../utils/constants";


const initialState = {
    themeVariant: 'dark',
    drawerOpen: false,
    language: 'en',
    activePath: '/',
    viewMode: 'grid'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changePath: (state, action) => {
            state.activePath = action.payload;
        },
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
        closeDrawer: state => {
            state.drawerOpen = false
        },
        openDrawer: state => {
            state.drawerOpen = true
        },
        toggleTheme: state => {
            localStorage.setItem(
                CONSTANTS.GOLD_STAR_THEME_VARIANT,
                state.themeVariant === 'dark' ? JSON.stringify('light') : JSON.stringify('dark')
            )
            state.themeVariant = state.themeVariant === 'dark' ? 'light' : 'dark';
        },
        toggleViewMode: (state) => {
            localStorage.setItem(CONSTANTS.GOLD_STAR_VIEW_MODE, JSON.stringify(state.viewMode === 'grid' ? 'list' : 'grid'));
            state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid'
        }
    }
});

export const {changePath, closeDrawer, openDrawer, toggleTheme} = uiSlice.actions;
export const selectUI = state => state.ui;
export default uiSlice.reducer;
