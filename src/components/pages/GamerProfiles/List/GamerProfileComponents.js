import React from "react";
import GamerFriends from "../partials/GamerFriends";
import Overview from "../partials/Overview";
import { useState, useEffect } from "react";
const GamerProfile = () => {
  const [currentPage, setCurrentPage] = useState("overView");
  const [isActive, setIsActive] = useState();
  const pages = {
    overView: <Overview />,
    friends: <GamerFriends />,
    // about: <About />,
    // contact: <Contact />
  };
  const handleNavClick = (page) => {
	setIsActive("active");
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <section className="gamer-profile-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gamer-profile-top-inner">
                <div className="profile-photo">
                  <div className="img">
                    <img src="assets/images/gamer/gamer.png" alt="" />
                  </div>
                  <div className="mybadge">
                    <img src="assets/images/gamer/badge.png" alt="" />
                    <span>12</span>
                  </div>
                </div>
                <div className="g-p-t-counters">
                  <div className="g-p-t-single-counter">
                    <div className="img">
                      <img src="assets/images/gamer/c1.png" alt="" />
                    </div>
                    <div className="content">
                      <h4>687</h4>
                      <span>Total Match</span>
                    </div>
                  </div>
                  <div className="g-p-t-single-counter">
                    <div className="img">
                      <img src="assets/images/gamer/c2.png" alt="" />
                    </div>
                    <div className="content">
                      <h4>687</h4>
                      <span>Win Ratio</span>
                    </div>
                  </div>
                  <div className="g-p-t-single-counter">
                    <div className="img">
                      <img src="assets/images/gamer/c3.png" alt="" />
                    </div>
                    <div className="content">
                      <h4>687</h4>
                      <span>Achievements</span>
                    </div>
                  </div>
                </div>
                <div className="msg-btn-wrapper">
                  <a
                    href="#"
                    className="msg-btn"
                    data-toggle="modal"
                    data-target="#gamer-chat"
                  >
                    <img src="assets/images/gamer/envelop.png" alt="" />
                    <span>Message</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="usermenu-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="usermenu-inner">
                <div className="left-area">
                  <ul>
                    {Object.keys(pages).map((page) => (
                      <li key={page}>
                        <a className={setIsActive} onClick={() => handleNavClick(page)}>{page}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="right-area">
                  <a href="#" className="mybtn2">
                    Follow
                  </a>
                  <a href="#" className="mybtn2">
                    Invite to Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(currentPage)}
      <section className="user-main-dashboard">{pages[currentPage]}</section>
      {/* {console.log(children)} */}
    </React.Fragment>
  );
};

export default GamerProfile;
