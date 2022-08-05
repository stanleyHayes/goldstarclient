import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const createBilling = (token, billing) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/billings`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: billing
    });
}

const getBilling = (token, billingID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/billings/${billingID}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}



const getBillings = (token, billingID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/billings/${billingID}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const BILLING_API = {createBilling, getBilling, getBillings};
