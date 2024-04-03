const backend_url = import.meta.env.VITE_BACKEND_URL
import axios from 'axios';

export const fetchStats = async(month) => {
    try {
        const response = await axios.get(`${backend_url}/stats?month=${month}`);
        return response.data;
    } catch(err) {
        throw new Error("Error fetching stats");
    }
}

export const fetchBarChartData = async(month) => {
    try {
        const response = await axios.get(`${backend_url}/charts/bar?month=${month}`);
        return response.data;
    } catch(err) {
        throw new Error("Error fetching bar chart data");
    }
}

export const fetchPieChartData = async(month) => {
    try {
        const response = await axios.get(`${backend_url}/charts/pie?month=${month}`);
        return response.data;
    } catch(err) {
        throw new Error("Error fetching pie chart data");
    }
}

export const fetchTransactionDetails= async(month,page,search) => {
    try {
        const response = await axios.get(`${backend_url}?page=${page}&month=${month}&search=${search}`);
        return response.data;
    } catch(err) {
        throw new Error("Error fetching transaction details");
    }
}

export const fetchTransactionsCount = async() => {
    try {
        const response = await axios.get(`${backend_url}/count`);
        return response.data;
    } catch(err) {
        throw new Error("Error fetching transaction count");
    }
}