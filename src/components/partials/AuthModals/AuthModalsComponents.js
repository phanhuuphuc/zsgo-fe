import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './style.css';
import ReCAPTCHA from 'react-google-recaptcha';
const LoginModalsComponents = (props) => {
	const setLoginForm = props.setLoginForm;
	const loginForm = props.loginForm;
	const setRegisterForm = props.setRegisterForm;
	const registerForm = props.registerForm;
	const handleCloseModal = props.handleCloseModal;
	const btnCloseRef = props.btnCloseRef;
	const btnSubmitRef = props.btnSubmitRef;
	const recaptchaRef = props.recaptchaRef;
	const btnDisabled = props.btnDisabled;
	const handleVerifyCaptcha = props.handleVerifyCaptcha;
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
		watch,
		reset,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		const recaptchaValue = recaptchaRef.current.getValue();
		setRegisterForm(Object.assign(registerForm, data));
		props.handleSubmitRegister(recaptchaValue);
		// reset();
	};
	return (
		<div className="modal-dialog modal-dialog-centered " role="document">
			<div className="modal-content">
				<button
					ref={btnCloseRef}
					type="button"
					className="close"
					data-dismiss="modal"
					aria-label="Close"
					onClick={() => handleCloseModal()}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="modal-body">
					<ul className="nav l-nav" role="tablist">
						<li className="nav-item" role="presentation">
							<Link
								className="nav-link mybtn2 active"
								id="pills-m_login-tab"
								data-toggle="pill"
								data-target="#pills-m_login"
								role="tab"
								aria-controls="pills-m_login"
								aria-selected="true"
							>
								Đăng nhập
							</Link>
						</li>
						<li className="nav-item" role="presentation">
							<Link
								className="nav-link mybtn2"
								id="pills-m_register-tab"
								data-toggle="pill"
								data-target="#pills-m_register"
								role="tab"
								aria-controls="pills-m_register"
								aria-selected="false"
							>
								Đăng ký
							</Link>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="pills-m_login"
							role="tabpanel"
							aria-labelledby="pills-m_login-tab"
						>
							<div className="header-area">
								<h4 className="title">Welcome to ZSGo</h4>
							</div>
							<div className="form-area">
								<div className="form-group">
									<input
										type="email"
										className="input-field"
										name="email"
										onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
										placeholder="Tài khoản"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="input-field"
										id="input-email"
										name="password"
										onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
										placeholder="Mật khẩu"
									/>
								</div>
								<div className="form-group">
									<span>
										Quên mật khẩu? <Link href="#">Click here</Link>
									</span>
								</div>
								<div className="form-group">
									<button
										type="submit"
										className="mybtn2"
										ref={btnSubmitRef}
										onClick={props.handleSubmitLogin}
									>
										Đăng nhập
									</button>
								</div>
							</div>
						</div>

						<div
							className="tab-pane fade"
							id="pills-m_register"
							role="tabpanel"
							aria-labelledby="pills-m_register-tab"
						>
							<div className="header-area">
								<span className="bunnus_btn">
									<span>Quà đăng ký</span>
									<h4>Xe S 7ngày</h4>
								</span>
							</div>
							<div className="form-area">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="form-group">
										<input
											type="text"
											name="name"
											className="input-field"
											id="input-name1"
											placeholder="Họ tên"
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													name: e.target.value,
												})
											}
											{...register('name', {
												required: 'Nhập họ tên',
												minLength: {
													value: 5,
													message: 'vui lòng nhập ít nhất 5 ký tự',
												},
											})}
											aria-invalid={errors.name ? 'true' : 'false'}
										/>
										<p className={errors.name ? 'erorors' : ''}>{errors.name?.message}</p>
									</div>
									<div className="form-group">
										<input
											type="email"
											name="email"
											className="input-field"
											id="input-email1"
											placeholder="Email"
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													email: e.target.value,
												})
											}
											{...register('email', {
												required: 'Nhập địa chỉ email',
												pattern: {
													value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
													message: 'Định dạng email không đúng',
												},
											})}
										/>
										<p className={errors.email ? 'erorors' : ''}>{errors.email?.message}</p>
									</div>
									<div className="form-group">
										<input
											type="password"
											name="password"
											className="input-field"
											id="input-password"
											placeholder="Mật khẩu"
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													password: e.target.value,
												})
											}
											{...register('password', {
												required: 'Nhập mật khẩu',
												pattern: {
													value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
													message:
														'Để bảo mật, mật khẩu phải có cả chữ hoa thường và số và ký tự đặc biệt: viDu01?!@$',
												},
											})}
										/>

										<p className={errors.password ? 'erorors' : ''}>{errors.password?.message}</p>
									</div>
									<div className="form-group">
										<input
											type="password"
											name="confirmPassword"
											className="input-field"
											id="input-con-password"
											placeholder="Xác nhận mật khẩu"
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													confirmPassword: e.target.value,
												})
											}
											{...register('confirmPassword', { required: 'Xác nhận mật khẩu' })}
										/>
										<p className={errors.confirmPassword ? 'erorors' : ''}>
											{errors.confirmPassword?.message}
										</p>
										{watch('confirmPassword') !== watch('password') &&
										getValues('confirmPassword') ? (
											<p className="erorors">Mật khẩu xác nhận chưa đúng</p>
										) : null}
									</div>
									{/* <div className="form-group">
										<input
											type="file"
											id="avatar"
											name="avatar"
											accept="image/png,image/jpeg,image/gif"
											className="input-field"
											placeholder="Ảnh đại diện"
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													avatar: e.target.files[0],
												})
											}
										/>
									</div> */}
									<ReCAPTCHA
										sitekey={process.env.REACT_APP_RECAPTCHAV2_SITE_KEY_LOCAL}
										onChange={handleVerifyCaptcha}
										ref={recaptchaRef}
									/>

									<div className="form-group">
										<input
											disabled={btnDisabled}
											type="submit"
											value="Đăng ký"
											className={btnDisabled ? 'mybtn2 disabled' : 'mybtn2'}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginModalsComponents;
