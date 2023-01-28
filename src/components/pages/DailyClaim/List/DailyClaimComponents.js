import React from 'react';
import { Link } from 'react-router-dom';

const DailyClaimComponents = () => {
	return (
		<React.Fragment>
			<section className="breadcrumb-area bonus"></section>
			<section className="bonuse-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-area">
								<div className="row justify-content-center">
									<div className="col-lg-8 text-center">
										<h1>Điểm danh nhận quà tháng 01</h1>
										<Link to="/" className="mybtn2">
											Điểm danh
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b1.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b2.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b3.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b4.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b5.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b6.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b7.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="single-bonus">
								<img src="/assets/images/bonus/b8.png" alt="" />
								<h4>Randon reward</h4>
								<Link to="/">
									<i className="fas fa-users"></i>928
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
