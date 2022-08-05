import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const track = (trackingID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/tracking/${trackingID}`
    });
}

export const TRACKING_API = {track};
