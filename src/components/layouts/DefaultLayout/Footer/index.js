function Footer() {
    return ( 
	<footer className="footer" id="footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="flogo">
						<a href="#"><img src="{{asset('frontend/assets/images/footer-ogo.png')}}" alt=""/></a>
					</div>
					<div className="social-links">
						<ul>
							<li>
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
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
								<a href="#">
									About
								</a>
							</li>
							<li>
								<a href="#">
									FAQ
								</a>
							</li>
							<li>
								<a href="#">
									Contact
								</a>
							</li>
							<li>
								<a href="#">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#">
									Privacy
								</a>
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
							<p>Copyright © 2021.All Rights Reserved By Jugaro</p>
					</div>
				</div>
			</div>
		</div>
	</footer> 
     );
}

export default Footer;