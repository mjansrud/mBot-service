import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = process.env.REACT_APP_URL_API;

export {getTickerData, getChartData, getTradesData};

function getTickerData() {
    const url = `${BASE_URL}/api/ticker`;
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}

function getChartData(pair, period, start, end) {
    const url = `${BASE_URL}/api/chart/${pair}/${period}/${start}/${end}`;
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}

function getTradesData(pair, start, end) {
    const url = `${BASE_URL}/api/trades/${pair}/${start}/${end}`;
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}