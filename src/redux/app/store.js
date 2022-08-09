import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import authReducer from "../features/auth/auth-slice";
import trackingReducer from "../features/tracking/tracking-slice";
import messageReducer from "../features/message/message-slice";
import shipmentReducer from "../features/shipment/shipment-slice";
import billingReducer from "../features/billing/billing-slice";
import calculatorReducer from "../features/calculator/calculator-slice";
import dashboardReducer from "../features/dashboard/dashboard-slice";


import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.GOLD_STAR_THEME_VARIANT) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_THEME_VARIANT)) : 'dark';

const viewMode = localStorage.getItem(CONSTANTS.GOLD_STAR_VIEW_MODE) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_VIEW_MODE)) : 'grid';

const token = localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_TOKEN) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_TOKEN)) : null;

const authData = localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_DATA) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GOLD_STAR_AUTH_DATA)) : null;


const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        tracking: trackingReducer,
        message: messageReducer,
        shipment: shipmentReducer,
        billing: billingReducer,
        calculator: calculatorReducer,
        dashboard: dashboardReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false, viewMode},
        auth: {
            token,
            authData: {
                firstName: 'Inigo',
                lastName: 'Lopez',
                fullName: 'Inigo Lopez',
                email: 'inigo.lopez@jesuit.com',
                username: 'inigolopez',
                phone: '+12029844170',
                status: 'active'
            }
        }
    },
    devTools: true
});

export default store;
