import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const sendMessage = (data) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/messages/`,
        data
    });
}

export const MESSAGE_API = {sendMessage};
