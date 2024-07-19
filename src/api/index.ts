import axios, { AxiosInstance } from 'axios';
import { ApiRequestConfig } from '@/api/index.types';

const axiosParams = {
	baseURL: import.meta.env.VITE_BASE_URL as string,
};

export const axiosInstance = axios.create(axiosParams);

const api = (httpClient: AxiosInstance) => {
	return {
		get: <T>(url: string, config: ApiRequestConfig = {}) =>
			httpClient.get<T>(url, config),

		post: <T>(
			url: string,
			body: unknown = null,
			config: ApiRequestConfig = {}
		) => httpClient.post<T>(url, body, config),
	};
};

export default api(axiosInstance);
