import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const createShipment = (token, shipment) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/shipments`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: shipment
    });
}

const getShipment = (token, shipmentID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/shipments/${shipmentID}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


const updateShipment = (token, shipment, shipmentID) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/shipments/${shipmentID}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: shipment
    });
}

const getShipments = (token, shipmentID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/shipments/${shipmentID}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const SHIPMENT_API = {createShipment, getShipment, updateShipment, getShipments};
