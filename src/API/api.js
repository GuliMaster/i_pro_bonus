import axios from "axios";

const AccessKey = process.env.REACT_APP_ACCESS_KEY;

let clientInstance = axios.create({
    baseURL: 'http://84.201.188.117:5021',
    headers: {
        'AccessKey': AccessKey 
    }
});

let bonusInstance = axios.create({
    baseURL: 'http://84.201.188.117:5003',
    headers: {
        'AccessKey': AccessKey 
    }
});

export const getAccessTokenAPI = () => {
    return clientInstance
        .post(`/api/v3/clients/accesstoken`, 
        {
            "idClient": process.env.REACT_APP_CLIENT_ID,
            "accessToken": "",
            "paramName": "device",
            "paramValue": process.env.REACT_APP_DEVICE_ID,
            "latitude": 0,
            "longitude": 0,
            "sourceQuery": 0
          });
}

export const getBonusesAPI = (accessToken) => {
    return bonusInstance
        .get(`/api/v3/ibonus/generalinfo/${accessToken}`);
}