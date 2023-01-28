import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponents = () => {
	return (
		<React.Fragment>
			<div className="hero-area hero-area2 hero-area4">
				<img className="shape parallax5" src="./assets/images/home/h2-shape.png" alt="" />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="content">
									{/* <h5 className="subtitle">ZSGo - Touch Your Limit</h5> */}
									<h1 className="title">
										<img src="./assets/images/text.png" alt="" />
									</h1>
									<div className="links">
										<Link href="#" className="mybtn1">
											Tải Game
										</Link>
										<Link
											href="https://www.youtube.com/watch?v=jssO8-5qmag"
											className="video_btn play-video mfp-iframe"
										>
											<i className="fas fa-play"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="counter-section counter-section2">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="left-info">
								<h5>Phần thưởng hấp dẫn </h5>
								<h3>Giải Đấu!</h3>
								<Link href="#" className="mybtn1">
									Coming soon
								</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="prize-pool">
								<h6>Giải thưởng</h6>
								<h3>1500 Gcoins</h3>
								<div className="timecounter">
									<i className="far fa-clock"></i>
									<div data-countdown="2021/12/15"></div>
								</div>

								<img src="./assets/images/s-box.png" alt="" />
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-12">
							<div className="l-winner-slider-wrapper">
								<h4>Tay đua chiến thắng</h4>
								<div className="l-winner-slider">
									<div className="s-item">
										<div className="img">
											<img src="./assets/images/l-winner/1.png" alt="" />
											<span>$800</span>
										</div>
									</div>
									<div className="s-item">
										<div className="img">
											<img src="./assets/images/l-winner/2.png" alt="" />
											<span>$800</span>
										</div>
									</div>
									<div className="s-item">
										<div className="img">
											<img src="./assets/images/l-winner/3.png" alt="" />
											<span>$800</span>
										</div>
									</div>
									<div className="s-item">
										<div className="img">
											<img src="./assets/images/l-winner/3.png" alt="" />
											<span>$800</span>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			<section className="game-play-section">
				<img
					className="left-img"
					style={{ width: 100 + '%' }}
					src="./assets/images/game-play/left-img.png"
					alt=""
				/>
				{/* <img className="right-img" src="./assets/images/game-play/right-img.png" alt="" /> */}
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h5 className="subtitle">Chinh Phục Tốc Độ</h5>
								<h2 className="title ">PLAY AND WIN</h2>
								<h6 className="text">Hoàn thành khiêu chiến các bản đồ để nhận Gcoins!</h6>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-play">
								<div className="image">
									<img src="./assets/images/game-play/1.png" alt="" />
								</div>
								<div className="contant">
									<Link href="#" className="mybtn1">
										Sắp mở
									</Link>
									<h4>Chưa có người tham gia</h4>
									{/* <ul>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm1.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm2.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm3.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm4.png" alt="" />
											</Link>
										</li>
										<li>
											<span>32+</span>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-play">
								<div className="image">
									<img src="./assets/images/game-play/2.png" alt="" />
								</div>
								<div className="contant">
									<Link href="#" className="mybtn1">
										Sắp mở
									</Link>
									<h4>Chưa có người tham gia</h4>
									{/* <ul>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm1.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm2.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm3.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm4.png" alt="" />
											</Link>
										</li>
										<li>
											<span>32+</span>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-play">
								<div className="image">
									<img src="./assets/images/game-play/3.png" alt="" />
								</div>
								<div className="contant">
									<Link href="#" className="mybtn1">
										Sắp mở
									</Link>
									<h4>Chưa có người tham gia</h4>
									{/* <ul>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm1.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm2.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm3.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm4.png" alt="" />
											</Link>
										</li>
										<li>
											<span>32+</span>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-play">
								<div className="image">
									<img src="./assets/images/game-play/4.png" alt="" />
								</div>
								<div className="contant">
									<Link href="#" className="mybtn1">
										Sắp mở
									</Link>
									<h4>Chưa có người tham gia</h4>
									{/* <ul>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm1.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm2.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm3.png" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="./assets/images/player/sm4.png" alt="" />
											</Link>
										</li>
										<li>
											<span>32+</span>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-center">
							<Link href="#" className="b-all-btn">
								Chờ bọn mình nhé!
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="latest-arcive2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h5 className="subtitle">Cuộc Đua Kỹ Năng</h5>
								<h2 className="title ">BẢNG XẾP HẠNG</h2>
								<h6 className="text">Người chơi có số cuộc đua nhiều nhất!</h6>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="nav  mb-3" role="tablist">
								<li className="nav-item">
									<a
										className="nav-link active"
										id="pills-home-tab"
										data-toggle="pill"
										href="#pills-home"
										role="tab"
										aria-controls="pills-home"
										aria-selected="true"
									>
										TOP TRẬN ĐUA
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="pills-profile-tab"
										data-toggle="pill"
										href="#pills-profile"
										role="tab"
										aria-controls="pills-profile"
										aria-selected="false"
									>
										TOP TRẬN WIN
									</a>
								</li>
							</ul>
							<div className="tab-content l-a-nav" id="pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="pills-home"
									role="tabpanel"
									aria-labelledby="pills-home-tab"
								>
									<div className="row">
										<div className="col-lg-5">
											<div className="left-content">
												<div className="heading-area">
													<img src="./assets/images/arcive/i2.png" alt="" />
													<h6>Lần cập nhật gần nhất</h6>
													<h3>Top số trận đua</h3>
												</div>
												<ul>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i3.png" alt="" />
															<div className="content">
																<h4>Cấp độ & phần thưởng</h4>
																<p>
																	Tham gia một cuộc đua lớn gồm nhiều cấp độ và không
																	giới hạn phần thưởng cột mốc
																</p>
															</div>
														</div>
													</li>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i4.png" alt="" />
															<div className="content">
																<h4>Hoàn thành nhanh nhất</h4>
																<p>Hoàn thành các bản đồ nhanh nhất</p>
															</div>
														</div>
													</li>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i5.png" alt="" />
															<div className="content">
																<h4>Thưởng</h4>
																<p>Gcoins - coming soon</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-7">
											<div className="l-arcive-box2-wrapper">
												<div className="l-arcive-box2">
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa4.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m1.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="assets/images/arcive/mony.png" alt="" />
															<h6>2000 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa5.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m2.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 2</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="assets/images/arcive/mony.png" alt="" />
															<h6>1000 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa6.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m3.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 3</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>500 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa7.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m4.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 4</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>200 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa8.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m5.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>100 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa9.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m6.png" alt="" />
																</div>
																<div className="right2">
																	<h4>test</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>50 Gcoins</h6>
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
										<div className="col-lg-5">
											<div className="left-content">
												<div className="heading-area">
													<img src="./assets/images/arcive/i2.png" alt="" />
													<h6>Lần cập nhật gần nhất</h6>
													<h3>Top trận thắng</h3>
												</div>
												<ul>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i3.png" alt="" />
															<div className="content">
																<h4>Cấp độ & phần thưởng</h4>
																<p>Có tổng số trận đua thắng nhiều nhất</p>
															</div>
														</div>
													</li>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i4.png" alt="" />
															<div className="content">
																<h4>Thắng nhiều nhất</h4>
																<p>Hoàn thành các bản đồ nhanh nhất</p>
															</div>
														</div>
													</li>
													<li>
														<div className="info-box">
															<img src="./assets/images/arcive/i5.png" alt="" />
															<div className="content">
																<h4>Thưởng</h4>
																<p>Gcoins - coming soon</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-7">
											<div className="l-arcive-box2-wrapper">
												<div className="l-arcive-box2">
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa4.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m1.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="assets/images/arcive/mony.png" alt="" />
															<h6>2000 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa5.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m2.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 2</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="assets/images/arcive/mony.png" alt="" />
															<h6>1000 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa6.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m3.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 3</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>500 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa7.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m4.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin test 4</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>200 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa8.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m5.png" alt="" />
																</div>
																<div className="right2">
																	<h4>Admin</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>100 Gcoins</h6>
														</div>
													</div>
													<div className="s-a-b">
														<div className="left">
															<img src="./assets/images/arcive/sa9.png" alt="" />
															<div className="content">
																<div className="left2">
																	<img src="./assets/images/arcive/m6.png" alt="" />
																</div>
																<div className="right2">
																	<h4>test</h4>
																	<div className="stars">
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star"></i>
																		<i className="fas fa-star-half-alt"></i>
																	</div>
																</div>
															</div>
														</div>
														<div className="right">
															<img src="./assets/images/arcive/mony.png" alt="" />
															<h6>50 Gcoins</h6>
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
			</section>
			{/* <section className="ex-lottery ex-lottery2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h5 className="subtitle">Exclusive Lottery</h5>
								<h2 className="title ">Raffles Ending Soon</h2>
								<h6 className="text">Now's your chance to win a exclusive product!</h6>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="ex-lottery-slider">
								<div className="slider-item">
									<div className="single-tikit">
										<div className="image">
											<span className="tag">Ending Soon</span>
											<img src="./assets/images/product/1.png" alt="" />
										</div>
										<div className="content">
											<div className="top-area">
												<div className="top-info">
													<span>
														<i className="far fa-clock"></i>13 Hours Left
													</span>
													<span>
														<i className="fas fa-ticket-alt"></i>99 Tickets Left
													</span>
												</div>
												<div className="top-bar">
													<div className="progress-bar"></div>
													<div className="main-bar"></div>
												</div>
											</div>
											<div className="content-area">
												<h4>HyperX Pulsefire FPS PRO</h4>
												<div className="c-bottom">
													<span>Valued at €51.99</span>
													<Link href="#" className="mybtn1">
														Buy Ticket
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="single-tikit">
										<div className="image">
											<span className="tag">Ending Soon</span>
											<img src="./assets/images/product/2.png" alt="" />
										</div>
										<div className="content">
											<div className="top-area">
												<div className="top-info">
													<span>
														<i className="far fa-clock"></i>13 Hours Left
													</span>
													<span>
														<i className="fas fa-ticket-alt"></i>99 Tickets Left
													</span>
												</div>
												<div className="top-bar">
													<div className="progress-bar"></div>
													<div className="main-bar"></div>
												</div>
											</div>
											<div className="content-area">
												<h4>HyperX - JETBLACK</h4>
												<div className="c-bottom">
													<span>Valued at €51.99</span>
													<Link href="#" className="mybtn1">
														Buy Ticket
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="single-tikit">
										<div className="image">
											<span className="tag">Ending Soon</span>
											<img src="./assets/images/product/3.png" alt="" />
										</div>
										<div className="content">
											<div className="top-area">
												<div className="top-info">
													<span>
														<i className="far fa-clock"></i>13 Hours Left
													</span>
													<span>
														<i className="fas fa-ticket-alt"></i>99 Tickets Left
													</span>
												</div>
												<div className="top-bar">
													<div className="progress-bar"></div>
													<div className="main-bar"></div>
												</div>
											</div>
											<div className="content-area">
												<h4>HyperX Cloud II Gunmetal</h4>
												<div className="c-bottom">
													<span>Valued at €51.99</span>
													<Link href="#" className="mybtn1">
														Buy Ticket
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="single-tikit">
										<div className="image">
											<span className="tag">Ending Soon</span>
											<img src="./assets/images/product/1.png" alt="" />
										</div>
										<div className="content">
											<div className="top-area">
												<div className="top-info">
													<span>
														<i className="far fa-clock"></i>13 Hours Left
													</span>
													<span>
														<i className="fas fa-ticket-alt"></i>99 Tickets Left
													</span>
												</div>
												<div className="top-bar">
													<div className="progress-bar"></div>
													<div className="main-bar"></div>
												</div>
											</div>
											<div className="content-area">
												<h4>HyperX Pulsefire FPS PRO</h4>
												<div className="c-bottom">
													<span>Valued at €51.99</span>
													<Link href="#" className="mybtn1">
														Buy Ticket
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			{/* <section className="recent-winners">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="top-section">
								<h3>Recent winners</h3>
								<Link href="#">View all</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-winner">
								<div className="img">
									<img src="./assets/images/r-winner/1.png" alt="" />
								</div>
								<div className="content">
									<div className="top-content">
										<img src="./assets/images/r-winner/p1.png" alt="" />
										<div className="lc">
											<h6>Vicky Hart</h6>
											<span>3 days ago</span>
										</div>
									</div>
									<div className="numbers">
										<span>08</span>
										<span>15</span>
										<span>18</span>
										<span>33</span>
										<span>35</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-winner">
								<div className="img">
									<img src="./assets/images/r-winner/2.png" alt="" />
								</div>
								<div className="content">
									<div className="top-content">
										<img src="./assets/images/r-winner/p2.png" alt="" />
										<div className="lc">
											<h6>Vicky Hart</h6>
											<span>3 days ago</span>
										</div>
									</div>
									<div className="numbers">
										<span>08</span>
										<span>15</span>
										<span>18</span>
										<span>33</span>
										<span>35</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6">
							<div className="single-winner">
								<div className="img">
									<img src="./assets/images/r-winner/3.png" alt="" />
								</div>
								<div className="content">
									<div className="top-content">
										<img src="./assets/images/r-winner/p3.png" alt="" />
										<div className="lc">
											<h6>Vicky Hart</h6>
											<span>3 days ago</span>
										</div>
									</div>
									<div className="numbers">
										<span>08</span>
										<span>15</span>
										<span>18</span>
										<span>33</span>
										<span>35</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section className="join_us join_us2 join_us3">
				<img className="l-image" src="./assets/images/joinus_left_img.png" alt="" />
				<img className="r-image" src="./assets/images/joinus-bg2.png" alt="" />
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-xl-7">
							<div className="section-heading content-left">
								<h5 className="subtitle">ZSGo - Cuộc Đua Kỹ Năng</h5>
								<h2 className="title ">chơi là thích</h2>
								<h6 className="text">
									Đứa con tinh thần của một cựu game thủ, đừng ngại đăng ký trải nghiệm bạn nhé, vì nó
									miễn phí !.
								</h6>
								<Link href="#" className="mybtn1">
									Join US
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="subscribe-area subscribe-area2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="subscribe-box">
								<img className="left" src="./assets/images/vr.png" alt="" />
								<img className="right" src="./assets/images/game%20controler_.png" alt="" />
								<div className="row justify-content-center">
									<div className="col-lg-12">
										<div className="heading-area">
											<h5 className="sub-title">Subscribe to Jugaro</h5>
											<h4 className="title">To Get Exclusive Benefits</h4>
										</div>
									</div>

									<div className="col-lg-6 col-12">
										<form action="#" className="form-area">
											<input type="text" placeholder="Your Email Address" />
											<button className="mybtn1" type="submit">
												Subscribe
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div
				className="modal fade"
				id="usernotification"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h4>Notification</h4>
							<div className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</div>
						</div>
						<div className="modal-body">
							<div className="single-notification">
								<div className="img">
									<img src="./assets/images/n1.png" alt="" />
								</div>
								<div className="content">
									<div className="top-area">
										<h4>Update Announcement</h4>
										<p>2021-03-07 - 23:50:21 </p>
									</div>
									<div className="middle-area">
										<h6>Dear player:</h6>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum
											dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis
											magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis.
											Nulla et finibus massa. Ut varius tristique elit et gravida.
										</p>
									</div>
									<div className="bottom-area">
										<p>Jugaro.Game Team</p>
										<span>April 30 2021</span>
									</div>
								</div>
							</div>
							<div className="single-notification">
								<div className="img">
									<img src="./assets/images/n1.png" alt="" />
								</div>
								<div className="content">
									<div className="top-area">
										<h4>Update Announcement</h4>
										<p>2021-03-07 - 23:50:21 </p>
									</div>
									<div className="middle-area">
										<h6>Dear player:</h6>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum
											dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis
											magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis.
											Nulla et finibus massa. Ut varius tristique elit et gravida.
										</p>
									</div>
									<div className="bottom-area">
										<p>Jugaro.Game Team</p>
										<span>April 30 2021</span>
									</div>
								</div>
							</div>
							<div className="single-notification">
								<div className="img">
									<img src="./assets/images/n1.png" alt="" />
								</div>
								<div className="content">
									<div className="top-area">
										<h4>Update Announcement</h4>
										<p>2021-03-07 - 23:50:21 </p>
									</div>
									<div className="middle-area">
										<h6>Dear player:</h6>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum
											dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis
											magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis.
											Nulla et finibus massa. Ut varius tristique elit et gravida.
										</p>
									</div>
									<div className="bottom-area">
										<p>Jugaro.Game Team</p>
										<span>April 30 2021</span>
									</div>
								</div>
							</div>
							<div className="single-notification">
								<div className="img">
									<img src="./assets/images/n1.png" alt="" />
								</div>
								<div className="content">
									<div className="top-area">
										<h4>Update Announcement</h4>
										<p>2021-03-07 - 23:50:21 </p>
									</div>
									<div className="middle-area">
										<h6>Dear player:</h6>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum
											dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis
											magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis.
											Nulla et finibus massa. Ut varius tristique elit et gravida.
										</p>
									</div>
									<div className="bottom-area">
										<p>Jugaro.Game Team</p>
										<span>April 30 2021</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="usermessage"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</div>
						<div className="modal-body">
							<div id="mycontainer">
								<aside>
									<header>
										<input type="text" placeholder="search" />
									</header>
									<ul>
										<li>
											<img src="./assets/images/profiles/chat_avatar_01.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status orange"></span>
													offline
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_02.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_03.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status orange"></span>
													offline
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_04.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_05.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status orange"></span>
													offline
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_06.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_07.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_08.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_09.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status green"></span>
													online
												</h3>
											</div>
										</li>
										<li>
											<img src="./assets/images/profiles/chat_avatar_10.jpg" alt="" />
											<div>
												<h2>Prénom Nom</h2>
												<h3>
													<span className="status orange"></span>
													offline
												</h3>
											</div>
										</li>
									</ul>
								</aside>
								<main>
									<header>
										<img src="./assets/images/profiles/chat_avatar_01.jpg" alt="" />
										<div>
											<h2>Vincent Porter</h2>
											<h3>already 1902 messages</h3>
										</div>
									</header>
									<ul id="chat">
										<li className="you">
											<div className="entete">
												<span className="status green"></span>
												<h2>Vincent</h2>
												<h3>10:12AM, Today</h3>
											</div>
											<div className="triangle"></div>
											<div className="message">
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
												ligula eget dolor.
											</div>
										</li>
										<li className="me">
											<div className="entete">
												<h3>10:12AM, Today</h3>
												<h2>Vincent</h2>
												<span className="status blue"></span>
											</div>
											<div className="triangle"></div>
											<div className="message">
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
												ligula eget dolor.
											</div>
										</li>
										<li className="me">
											<div className="entete">
												<h3>10:12AM, Today</h3>
												<h2>Vincent</h2>
												<span className="status blue"></span>
											</div>
											<div className="triangle"></div>
											<div className="message">OK</div>
										</li>
										<li className="you">
											<div className="entete">
												<span className="status green"></span>
												<h2>Vincent</h2>
												<h3>10:12AM, Today</h3>
											</div>
											<div className="triangle"></div>
											<div className="message">
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
												ligula eget dolor.
											</div>
										</li>
										<li className="me">
											<div className="entete">
												<h3>10:12AM, Today</h3>
												<h2>Vincent</h2>
												<span className="status blue"></span>
											</div>
											<div className="triangle"></div>
											<div className="message">
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
												ligula eget dolor.
											</div>
										</li>
										<li className="me">
											<div className="entete">
												<h3>10:12AM, Today</h3>
												<h2>Vincent</h2>
												<span className="status blue"></span>
											</div>
											<div className="triangle"></div>
											<div className="message">OK</div>
										</li>
									</ul>
								</main>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottomtotop">
				<i className="fas fa-chevron-right"></i>
			</div>
		</React.Fragment>
	);
};

export default HomeComponents;
