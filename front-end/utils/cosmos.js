const axios = require("axios").default;

const COLLECTION_ENDPOINT = "ENDPOINT"

export async function setCities() {
    const response = await axios.post(COLLECTION_ENDPOINT, {"name": "Cities"});
    return response.data;
}

export async function setServices(city_id = "") {
    const response = await axios.post(COLLECTION_ENDPOINT, {"name": "Services"});
    return response.data;
}

