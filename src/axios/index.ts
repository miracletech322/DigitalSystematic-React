import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import APP_CONFIG from '../config';

interface RequestOptions {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: Record<string, any> | FormData;
    headers?: Record<string, string>;
}

const request = async ({
    url,
    method,
    data,
    headers,
}: RequestOptions): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
        method,
        url: APP_CONFIG.API_ENDPOINT + url,
        headers,
    };

    // Add auth token from localStorage if available
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        config.headers = {
            ...config.headers,
            Authorization: authToken,
        };
    }

    if (data) {
        if (data instanceof FormData) {
            config.data = data;
        } else {
            config.data = JSON.stringify(data);
            config.headers = {
                ...config.headers,
                'Content-Type': 'application/json',
            };
        }
    }

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        throw error;
    }
};

export default request;
