import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginModalComponents from './AuthModalsComponents';
import { login, register } from '@/redux/actions/auth';

const LoginModalContainer = () => {
	const dispatch = useDispatch();
	const btnCloseRef = useRef();
	const btnSubmitRef = useRef();
	const recaptchaRef = useRef();
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const [registerForm, setRegisterForm] = useState({
		name: '',
		email: '',
		// avatar: '',
		token: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmitLogin = useCallback(() => {
		dispatch(login(loginForm.email, loginForm.password))
			.then((res) => {
				handleCloseModal();
			})
			.catch((err) => {});
	}, [dispatch, loginForm.email, loginForm.password]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Enter') {
				handleSubmitLogin();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleSubmitLogin]);

	const handleSubmitRegister = (token) => {
		const formData = new FormData();
		formData.append('token', token);
		formData.append('name', registerForm.name);
		formData.append('email', registerForm.email);
		formData.append('password', registerForm.password);
		formData.append('confirmPassword', registerForm.confirmPassword);
		dispatch(register(Object.fromEntries(formData)))
			.then((res) => {
				console.log(res);
				btnCloseRef.current.click();
			})
			.catch((err) => {
				console.log(err);
			});
		recaptchaRef.current.reset();
	};

	const handleVerifyCaptcha = (token) => {
		setBtnDisabled(false);
	};

	const handleCloseModal = () => {
		btnCloseRef.current.click();
	};

	const handleLogOut = () => {
		console.log('Log out');
	};

	return (
		<LoginModalComponents
			handleSubmitLogin={handleSubmitLogin}
			setLoginForm={setLoginForm}
			btnCloseRef={btnCloseRef}
			btnSubmitRef={btnSubmitRef}
			recaptchaRef={recaptchaRef}
			loginForm={loginForm}
			btnDisabled={btnDisabled}
			handleVerifyCaptcha={handleVerifyCaptcha}
			setRegisterForm={setRegisterForm}
			registerForm={registerForm}
			handleLogOut={handleLogOut}
			handleCloseModal={handleCloseModal}
			handleSubmitRegister={handleSubmitRegister}
		/>
	);
};

export default LoginModalContainer;
