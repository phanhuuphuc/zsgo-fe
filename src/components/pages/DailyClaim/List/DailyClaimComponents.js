import React from 'react';
import { Link } from 'react-router-dom';

const DailyClaimComponents = () => {
	return (
		<React.Fragment>
			<section class="breadcrumb-area bonus"></section>
			<section class="bonuse-section">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="header-area">
								<div class="row justify-content-center">
									<div class="col-lg-8 text-center">
										<h1>Over 30 other bonuses waiting for you</h1>
										<Link to="/" class="mybtn2">
											Claim Your Bonus
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b1.png" alt="" />
								<h4>Welcome+ Bonus</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b2.png" alt="" />
								<h4>Challenger</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b3.png" alt="" />
								<h4>Superpower</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b4.png" alt="" />
								<h4>BTC King</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b5.png" alt="" />
								<h4>BTC Top</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b6.png" alt="" />
								<h4>Bitcoin Faucet</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b7.png" alt="" />
								<h4>Biggest Winner</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="single-bonus">
								<img src="/assets/images/bonus/b8.png" alt="" />
								<h4>Progressive Jackpot</h4>
								<Link to="/">
									<i class="fas fa-users"></i>928
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default DailyClaimComponents;
