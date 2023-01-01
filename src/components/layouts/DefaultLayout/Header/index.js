import React from 'react';
import Logo from '@/assets/images/logo2.png';
import { Link } from 'react-router-dom';
import {
	HOME_PAGE_PATH,
	ITEM_DETAILS_PAGE_PATH,
	HELP_PAGE_PATH,
	GAMER_PROFILE_PAGE_PATH,
	WEBSHOP_ITEM_PAGE_PATH,
	WEBSHOP_CAR_PAGE_PATH,
	EVENT_ACUTION_PAGE_PATH,
	DAILY_CLAIM_PAGE_PATH,
} from '@//constants/path';
import LoginModal from '@/components/partials/AuthModals/AuthModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/actions/auth';
// const cx = classNameNames.bind(styles);
const Header = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			<header className="header">
				<div className="overlay"></div>
				<section className="top-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="content">
									<div className="left-content">
										<ul className="left-list">
											<li>
												<p>
													<i className="fas fa-headset"></i> Support
												</p>
											</li>
										</ul>
										<ul className="top-social-links">
											<li>
												<Link href="#">
													<i className="fab fa-facebook-f"></i>
												</Link>
											</li>
											<li>
												<Link href="#">
													<i className="fab fa-twitter"></i>
												</Link>
											</li>
											<li>
												<Link href="#">
													<i className="fab fa-pinterest-p"></i>
												</Link>
											</li>
											<li>
												<Link href="#">
													<i className="fab fa-linkedin-in"></i>
												</Link>
											</li>
											<li>
												<Link to="/#">
													<i className="fab fa-instagram"></i>
												</Link>
											</li>
										</ul>
									</div>
									<div className="right-content">
										<ul className="right-list">
											<li>
												<div className="language-selector">
													<div
														className="message"
														data-toggle="modal"
														data-target="#usermessage"
													>
														<i className="far fa-envelope"></i>
													</div>
												</div>
											</li>
											<li>
												<div
													className="notofication"
													data-toggle="modal"
													data-target="#usernotification"
												>
													<i className="far fa-bell"></i>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="mainmenu-area mainmenu-area2">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<nav className="navbar navbar-expand-lg navbar-light">
									<Link className="navbar-brand d-lg-none" to="/index.html">
										<img className="l2" src={Logo} alt="" />
									</Link>
									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#main_menu"
										aria-controls="main_menu"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span className="navbar-toggler-icon"></span>
									</button>

									<div className="collapse navbar-collapse fixed-height" id="main_menu">
										<div className="main-menu-inner">
											<ul className="navbar-nav mr-auto">
												<li className="nav-item dropdown">
													<Link className="nav-link active" to={HOME_PAGE_PATH.path}>
														Trang chủ
													</Link>
												</li>
												<li className="nav-item dropdown">
													<p className="nav-link  dropdown-toggle">Cửa hàng</p>
													<ul className="dropdown-menu">
														<li>
															<Link
																className="dropdown-item"
																to={WEBSHOP_ITEM_PAGE_PATH.path}
															>
																<i className="fa fa-cog fa-spin fa-3x fa-fw"></i> Động
																cơ
															</Link>
														</li>
														<li>
															<Link
																className="dropdown-item"
																to={WEBSHOP_CAR_PAGE_PATH.path}
															>
																<i className="fa fa-cog fa-spin fa-3x fa-fw"></i> Xe đua
															</Link>
														</li>
													</ul>
												</li>
												<li className="nav-item dropdown">
													<p className="nav-link  dropdown-toggle">Sự kiện</p>
													<ul className="dropdown-menu">
														<li className="nav-item">
															<Link
																className="dropdown-item"
																to={EVENT_ACUTION_PAGE_PATH.path}
															>
																<i className="fa fa-cog fa-spin fa-3x fa-fw"></i> Đấu
																giá
															</Link>
														</li>
														<li>
															<Link
																className="dropdown-item"
																to={WEBSHOP_CAR_PAGE_PATH.path}
															>
																<i className="fa fa-cog fa-spin fa-3x fa-fw"></i> Hộp bí
																ẩn
															</Link>
														</li>
													</ul>
												</li>
											</ul>
											<Link className="navbar-brand  d-none d-lg-block" to={HOME_PAGE_PATH.path}>
												<img className="l2" src={Logo} alt="" />
											</Link>
											<ul className="navbar-nav ml-auto">
												<li className="nav-item dropdown">
													<Link
														className="nav-link dropdown-toggle"
														to="/#"
														role="button"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														Hàng ngày
													</Link>
													<ul className="dropdown-menu">
														<li>
															<Link
																className="dropdown-item"
																to={DAILY_CLAIM_PAGE_PATH.path}
															>
																{' '}
																<i className="fa fa-angle-double-right"></i>
																Điểm danh
															</Link>
														</li>
														<li>
															<Link className="dropdown-item" to={HELP_PAGE_PATH.path}>
																{' '}
																<i className="fa fa-angle-double-right"></i>Help
															</Link>
														</li>
													</ul>
												</li>
												{!isLoggedIn && (
													<li>
														<Link
															to="/#"
															className="mybtn1"
															data-toggle="modal"
															data-target="#signin"
														>
															{' '}
															Đăng ký
														</Link>
													</li>
												)}
												{isLoggedIn && (
													<React.Fragment>
														<li>
															<div className="user-info-menu-area">
																<div className="left-area">
																	<div className="number">
																		<img src="assets/images/crypto/i1.png" alt="" />{' '}
																		<p>
																			200 <span>Gcoins</span>
																		</p>
																	</div>
																	<ul className="dp-links">
																		<li>
																			<Link href="#">
																				<img
																					src="assets/images/crypto/i1.png"
																					alt=""
																				/>{' '}
																				<p>
																					<b>200</b> <span>Gcoins</span>
																				</p>
																			</Link>
																		</li>
																		<li>
																			<Link href="#">
																				<img
																					src="assets/images/crypto/i1.png"
																					alt=""
																				/>{' '}
																				<p>
																					<b>100.000k</b> <span>MOMO</span>
																				</p>
																			</Link>
																		</li>
																	</ul>
																</div>
																<div className="right-area">
																	<div className="icon">
																		<img src="assets/images/menu-user.png" alt="" />
																	</div>
																	<div className="dp-menu">
																		<ul className="dp-links">
																			<li>
																				<Link to={GAMER_PROFILE_PAGE_PATH.path}>
																					<i className="far fa-user-circle"></i>
																					Thông tin
																				</Link>
																			</li>
																			<li>
																				<Link href="#">
																					<i className="fas fa-wallet"></i>
																					Ví
																				</Link>
																			</li>
																			<li>
																				<Link href="#">
																					<i className="fas fa-cog"></i>Cài
																					đặt
																				</Link>
																			</li>
																			<li>
																				<Link
																					onClick={() => dispatch(logout())}
																					href="#"
																				>
																					<i className="fas fa-sign-out-alt"></i>
																					Đăng xuất
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</li>
													</React.Fragment>
												)}
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div
				className="modal fade login-modal sign-in"
				id="signin"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="signin"
				aria-hidden="true"
			>
				<LoginModal />
			</div>
		</React.Fragment>
	);
};

export default Header;
