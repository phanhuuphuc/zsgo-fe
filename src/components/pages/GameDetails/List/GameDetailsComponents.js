import React from "react";
import { Link } from "react-router-dom";
const GameDetailsComponents = () => {
  return (
    <React.Fragment>
  <section className="games-details-top-bar">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="games-d-t-b-i">
						<div className="left-area">
							<Link className="modal-link" href="#" data-toggle="modal" data-target="#rankModal">
								<i className="far fa-chart-bar"></i>
								<span>Player Rank</span>
							</Link>
							<Link className="modal-link" href="#" data-toggle="modal" data-target="#faqModal">
								<i className="fas fa-question"></i>
								<span>FAQS</span>
							</Link>
							<Link href="#" className="mybtn2">How to Play</Link>
						</div>
						<div className="right-area">
							<div className="player-wrapper">
								<span>Players</span>
								<h6>28</h6>
							</div>
							<ul>
								<li>
									<Link href="#">
										<img src="assets/images/player/sm1.png" alt=""/>
									</Link>
								</li>
								<li>
									<Link href="#">
										<img src="assets/images/player/sm2.png" alt=""/>
									</Link>
								</li>
								<li>
									<Link href="#">
										<img src="assets/images/player/sm3.png" alt=""/>
									</Link>
								</li>
								<li>
									<Link href="#">
										<img src="assets/images/player/sm4.png" alt=""/>
									</Link>
								</li>
								<li>
									<span>
										32+
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  <section className="games-details">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="details-wrapper">
						<div className="left-content">
							<div className="ll-content">
								<div className="img">
									<img src="assets/images/game-play/2.png" alt=""/>
								</div>
								<Link href="#" className="mybtn2">Play</Link>
							</div>
							<div className="lr-content">
								<h3>Booyah!</h3>
								<h6>Multiplayer Shooting Games</h6>
								<h4>ABOUT GAME</h4>
								<p>
									Booyah! is multiplayer game, where you have to battle against your opponents with
									various weapons. You play this as first person shooter and you can join multiple
									game modes: Be king of the
									hill in a free-for-all, or cooperate with teammates to win in a team
									deathmatch.
								</p>
							</div>
						</div>
						<div className="right-content">
							<div className="price-box">
								<h6>Select Buy In:.</h6>
								<div className="price-qty">
									<span className="q i"><i className="fas fa-minus"></i></span>
									<span className="price">$2</span>
									<span className="q d"><i className="fas fa-plus"></i></span>
								</div>
								<h6>Number of players:</h6>
								<div className="players">
									2
								</div>
								<div className="price-pool-area">
									<div className="left">
										Prize pool:
									</div>
									<div className="right"> 
										<img src="./assets/images/arcive/mony.png" alt=""/>
										<div className="numb"><sup>$</sup>3.6</div>
									</div>
								</div>
								<Link href="#" className="mybtn2">Play</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </React.Fragment>
  );
};

export default GameDetailsComponents;
