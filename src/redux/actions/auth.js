import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from './types';
import { REQUEST_SUCCESS } from '@/constants/constants';
import { toast } from 'react-toastify';
import AuthService from '@/services/auth.service';
export const register = (formData) => (dispatch) => {
	return AuthService.register(formData).then((response) => {
		if (response.status === true && response.message === REQUEST_SUCCESS) {
			toast.success('Đăng ký thành công!');
			localStorage.setItem('user', JSON.stringify(response.data));
			dispatch({
				type: REGISTER_SUCCESS,
			});
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: response.data },
			});
			dispatch({
				type: SET_MESSAGE,
				payload: response.data.message,
			});
			return Promise.resolve();
		} else {
			response.errors &&
				Object.keys(response.errors).map((keyName, i) => {
					return toast.error(response.errors[keyName].toString());
				});
			dispatch({
				type: REGISTER_FAIL,
			});
			dispatch({
				type: SET_MESSAGE,
				payload: response.message,
			});
			return Promise.reject();
		}
	});
};

export const login = (username, password) => (dispatch) => {
	return AuthService.login(username, password).then((response) => {
		if (response.data.accessToken && response.status === true && response.message === REQUEST_SUCCESS) {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: response },
			});
			localStorage.setItem('user', JSON.stringify(response.data));
			toast.success('Chúc bạn vui vẻ!');
			return Promise.resolve();
		} else {
			dispatch({
				type: LOGIN_FAIL,
			});
			return Promise.reject();
		}
	});
};

export const logout = () => (dispatch) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
};
