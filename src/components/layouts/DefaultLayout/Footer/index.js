import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="flogo">
							<a href="#">
								<img src="{{asset('frontend/assets/images/footer-ogo.png')}}" alt="" />
							</a>
						</div>
						<div className="social-links">
							<ul>
								<li>
									<Link onClick={() => window.open('https://www.facebook.com/zsgo.net', '_blank')}>
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link onClick={() => window.open('https://discord.gg/tPsh2f47', '_blank')}>
										<i className="fab fa-discord fa-lg"></i>
									</Link>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-pinterest-p"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-menu">
							<ul>
								<li>
									<Link onClick={() => window.open('https://www.facebook.com/zsgo.net', '_blank')}>
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link onClick={() => window.open('https://discord.gg/tPsh2f47', '_blank')}>
										<i className="fab fa-discord fa-lg"></i>
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
					</div>
				</div>
			</div>
			<div className="copy-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<p>Copyright © 2023. All Rights Reserved By ZSGo</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
