import classNames from "classnames";
import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import Logo from "@/assets/images/logo2.png";
import { Link, generatePath } from "react-router-dom";
import { HOME_PAGE_PATH, GAME_DETAILS_PATH, HELP_PAGE_PATH } from "@/constants/path";
import LoginModal from "@/components/partials/AuthModals/AuthModalContainer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "bootstrap";
import EventBus from "@/common/EventBus";
import { logout } from "@/redux/actions/auth";
// const cx = classNames.bind(styles);
const Header = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(localStorage.getItem("user"))
  }, [localStorage.getItem("user")]);
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
                      {isLoggedIn && (
                      <li>
                        
                        <button
                          className="message"
                          onClick={() => dispatch(logout())}
                        >
                          <i className="fas fa-sign-out-alt"></i>
                        </button>
                      </li>
                      )}
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
                    <img
                      className="l2"
                      src={Logo}
                      alt=""
                    />
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

                  <div
                    className="collapse navbar-collapse fixed-height"
                    id="main_menu"
                  >
                    <div className="main-menu-inner">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link active dropdown-toggle"
                            to={HOME_PAGE_PATH}
                          >
                            Home
                          </Link>

                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/raffles.html">
                            Car Rental
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/games.html">
                            Games
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/tournaments.html">
                            Tournaments
                          </Link>
                        </li>
                      </ul>
                      <Link
                        className="navbar-brand  d-none d-lg-block"
                        to="/index.html"
                      >
                        <img
                          className="l2"
                          src={Logo}
                          alt=""
                        />
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
                            Pages
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="/about.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>About
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/bonuse-page.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Bonuse
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/ticket-page.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Ticket
                                Page
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/raffles-details.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Raffles
                                Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to={GAME_DETAILS_PATH}
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Games
                                Details
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/tournaments2.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>
                                Tournaments Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/gamer-profile1.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Gamer
                                Profile Public
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/gamer-profile6.html"
                              >
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Gamer
                                Problie Private{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to={HELP_PAGE_PATH}>
                                {" "}
                                <i className="fa fa-angle-double-right"></i>Help
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/404.html">
                                {" "}
                                <i className="fa fa-angle-double-right"></i>404
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact.html">
                            Contact
                          </Link>
                        </li>
                        {!isLoggedIn && (
                          <li>
                            <Link
                              to="/#"
                              className="mybtn1"
                              data-toggle="modal"
                              data-target="#signin"
                            >
                              {" "}
                              Đăng ký
                            </Link>
                          </li>
                        )}
                        {isLoggedIn && (
                          <li>
                            <Link
                              onClick={() => { console.log('LOGOUT OK'); }}
                              className="mybtn1">
                              Profiles
                            </Link>
                          </li>
                          // <li>
                          //   <Link
                          //     to="/#"
                          //     className="mybtn1"
                          //     data-toggle="modal"
                          //     data-target="#signin"
                          //   >
                          //     {" "}
                          //     Đăng xuất
                          //   </Link>
                          // </li>
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
}

export default Header;
