import axios from 'axios';
import { toast } from 'react-toastify';
const API_URL = process.env.REACT_APP_SERVER_BASE_URL + 'api/auth/';
let config = {
	headers: {
		'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_BASE_URL,
		'Content-Type': 'application/x-www-form-urlencoded',
		processData: false,
		contentType: false,
		accept: 'application/json',
	},
};
const register = (formData) => {
	return axios
		.post(API_URL + 'register', formData, config)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

const login = (email, password) => {
	return axios
		.post(API_URL + 'login', {
			email,
			password,
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			toast.error('Sai thông tin rồi, thử lại nhé!');
			return error.response.data;
		});
};

const logout = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	localStorage.removeItem('user');
	toast.dark(`👋 Hẹn gặp lại!  ${user.name}`);
};

const exportedObject = {
	register,
	login,
	logout,
};
export default exportedObject;
