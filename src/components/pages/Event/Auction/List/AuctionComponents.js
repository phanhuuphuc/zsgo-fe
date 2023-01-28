import { Link } from 'react-router-dom';
import { ACUTION_DETAILS_PAGE_PATH } from '@//constants/path';
import React from 'react';
const AuctionComponents = () => {
	return (
		<React.Fragment>
			<section class="breadcrumb-area turnaments2">
				<div class="content">
					<span class="title">Time left before finish:</span>
					<div class="timecounter">
						<i class="far fa-clock"></i>
						<div data-countdown="2021/12/15">
							<span>00:</span>
							<span>00:</span>
							<span>00:</span>
							<span>00</span>
						</div>
					</div>
				</div>
			</section>
			<section className="turnaments-tab-section">
				<div className="s-top-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6 col-lg-4">
								<div className="top-left-title">
									<h4>SỰ KIỆN HẸN GIỜ</h4>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8">
								<div className="t-t-s-nav">
									<ul className="nav" role="tablist">
										<li className="nav-item" role="presentation">
											<Link
												className="nav-link mybtn2 active"
												id="pills-home-tab"
												data-toggle="pill"
												to="#pills-home"
												role="tab"
												aria-controls="pills-home"
												aria-selected="true"
											>
												Hôm nay
											</Link>
										</li>
										<li className="nav-item" role="presentation">
											<Link
												className="nav-link mybtn2"
												id="pills-profile-tab"
												data-toggle="pill"
												to="#pills-profile"
												role="tab"
												aria-controls="pills-profile"
												aria-selected="false"
											>
												Tuần này
											</Link>
										</li>
										<li className="nav-item" role="presentation">
											<Link
												className="nav-link mybtn2"
												id="pills-contact-tab"
												data-toggle="pill"
												to="#pills-contact"
												role="tab"
												aria-controls="pills-contact"
												aria-selected="false"
											>
												Tháng này
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="tab-content" id="pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="pills-home"
									role="tabpanel"
									aria-labelledby="pills-home-tab"
								>
									<div className="row">
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/1.png" alt="" />
														</div>
														<div className="contant">
															<Link
																to={ACUTION_DETAILS_PAGE_PATH.path}
																className="mybtn2"
															>
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/2.png" alt="" />
														</div>
														<div className="contant">
															<Link
																to={ACUTION_DETAILS_PAGE_PATH.path}
																className="mybtn2"
															>
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/3.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/4.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="pills-profile"
									role="tabpanel"
									aria-labelledby="pills-profile-tab"
								>
									<div className="row">
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/1.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/2.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/3.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/4.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="pills-contact"
									role="tabpanel"
									aria-labelledby="pills-contact-tab"
								>
									<div className="row">
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/1.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/2.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/3.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="single-turnaments">
												<div className="left-area">
													<div className="single-play">
														<div className="image">
															<img src="/assets/images/game-play/4.png" alt="" />
														</div>
														<div className="contant">
															<Link to="tournaments2.html" className="mybtn2">
																Chi tiết
															</Link>
														</div>
													</div>
													<h4>37 People Playing</h4>
													<ul>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm1.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm2.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm3.png" alt="" />
															</Link>
														</li>
														<li>
															<Link to="#">
																<img src="/assets/images/player/sm4.png" alt="" />
															</Link>
														</li>
														<li>
															<span>32+</span>
														</li>
													</ul>
												</div>
												<div className="right-area">
													<div className="r-top-area">
														<h4>Coming soon</h4>
														<div className="list">
															<p>Coming soon</p>
															<span></span>
															<p>PS4 &amp; XB1</p>
														</div>
													</div>
													<div className="r-bottom-area">
														<div className="rl-area">
															<span className="title">Thời gian còn lại:</span>
															<div className="timecounter">
																<i className="far fa-clock"></i>
																<div data-countdown="2021/12/15">
																	<span>00:</span>
																	<span>00:</span>
																	<span>00:</span>
																	<span>00</span>
																</div>
															</div>
															<img src="/assets/images/s-box.png" alt="" />
														</div>
														<div className="rr-area">
															<h5>Giá hiện tại</h5>
															<h3>300Gs</h3>
															<div className="time-area">
																<h6>3/11/21 6:00 AM - 3/18/21 5:59 AM</h6>
																<img src="/assets/images/bg-time.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-center">
							<Link to="#" className="mybtn2">
								View More
							</Link>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AuctionComponents;
