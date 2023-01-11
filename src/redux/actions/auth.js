import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from './types';
import { toast } from 'react-toastify';
import AuthService from '@/services/auth.service';
export const register = (formData) => (dispatch) => {
	return AuthService.register(formData).then(
		(response) => {
			console.log(response);
			// dispatch({
			// 	type: REGISTER_SUCCESS,
			// });

			// dispatch({
			// 	type: SET_MESSAGE,
			// 	payload: response.data.message,
			// });

			return Promise.resolve();
		},
		(error) => {
			// const message =
			//   (error.response &&
			//     error.response.data &&
			//     error.response.data.message) ||
			//   error.message ||
			//   error.toString();
			console.log(error);
			// dispatch({
			// 	type: REGISTER_FAIL,
			// });

			// dispatch({
			// 	type: SET_MESSAGE,
			// 	payload: message,
			// });

			return Promise.reject();
		},
	);
};

export const login = (username, password) => (dispatch) => {
	return AuthService.login(username, password).then((data) => {
		if (data.status === true && data.data.accessToken) {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: data },
			});
			localStorage.setItem('user', JSON.stringify(data.data));
			toast.success('Enjoy the game!');
			return Promise.resolve();
		} else {
			dispatch({
				type: LOGIN_FAIL,
			});
			toast.error('Sai thông tin rồi, thử lại nhé!');
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
