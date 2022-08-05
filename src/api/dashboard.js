import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getDashboard = (token) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/dashboard`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const DASHBOARD_API = {getDashboard};
