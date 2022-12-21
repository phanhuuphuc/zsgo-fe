import classNames from "classnames";
import React from "react";
import styles from "./Header.module.scss";
import Logo from "@/assets/images/logo2.png";
import { Link,generatePath } from "react-router-dom";
import {HOME_PAGE_PATH, GAME_DETAILS_PATH, HELP_PAGE_PATH} from "@/constants/path";
// const cx = classNames.bind(styles);
const Header = () => {
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
                      <div className="right-content">
                        <ul className="right-list">
                          <li>
                            <div className="language-selector">
                              <select name="language" className="language">
                                <option value="1">EN</option>
                                <option value="2">IN</option>
                                <option value="3">BN</option>
                              </select>
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
                          <li>
                            <div 
                              className="message"
                              data-toggle="modal"
                              data-target="#usermessage"
                            >
                              <i className="far fa-envelope"></i>
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
                      <a className="navbar-brand d-lg-none" href="index.html">
                        <img
                          className="l2"
                          src={Logo}
                          alt=""
                        />
                      </a>
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
                              <a className="nav-link" href="raffles.html">
                              Car Rental
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="games.html">
                                Games
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="tournaments.html">
                                Tournaments
                              </a>
                            </li>
                          </ul>
                          <a
                            className="navbar-brand  d-none d-lg-block"
                            href="index.html"
                          >
                            <img
                              className="l2"
                              src={Logo}
                              alt=""
                            />
                          </a>
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Pages
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="about.html">
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>About
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="bonuse-page.html">
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Bonuse
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="ticket-page.html">
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Ticket
                                    Page
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="raffles-details.html"
                                  >
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Raffles
                                    Details
                                  </a>
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
                                  <a className="dropdown-item" href="tournaments2.html">
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>
                                    Tournaments Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="gamer-profile1.html"
                                  >
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Gamer
                                    Profile Public
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="gamer-profile6.html"
                                  >
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Gamer
                                    Problie Private{" "}
                                  </a>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to={HELP_PAGE_PATH}>
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>Help
                                  </Link>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="404.html">
                                    {" "}
                                    <i className="fa fa-angle-double-right"></i>404
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="contact.html">
                                Contact
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="mybtn1"
                                data-toggle="modal"
                                data-target="#signin"
                              >
                                {" "}
                                Đăng ký
                              </a>
                            </li>
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
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <ul className="nav l-nav" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link mybtn2 active"
                      id="pills-m_login-tab"
                      data-toggle="pill"
                      href="#pills-m_login"
                      role="tab"
                      aria-controls="pills-m_login"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link mybtn2"
                      id="pills-m_register-tab"
                      data-toggle="pill"
                      href="#pills-m_register"
                      role="tab"
                      aria-controls="pills-m_register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-m_login"
                    role="tabpanel"
                    aria-labelledby="pills-m_login-tab"
                  >
                    <div className="header-area">
                      <h4 className="title">Welcome to JuGARO</h4>
                    </div>
                    <div className="form-area">
                      <form action="#" method="POST">
                        <div className="form-group">
                          <input
                            type="text"
                            className="input-field"
                            id="input-name"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="input-field"
                            id="input-email"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <span>
                            Forgot your password? <a href="#">recover password</a>
                          </span>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="mybtn2">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-m_register"
                    role="tabpanel"
                    aria-labelledby="pills-m_register-tab"
                  >
                    <div className="header-area">
                      <span className="bunnus_btn">
                        <span>Current Contest Pool</span>
                        <h4>$500</h4>
                      </span>
                      <h4 className="title">Play +100 games and win cash!</h4>
                      <p className="text">
                        Fill this outyour majesty & Get Your Bonus
                      </p>
                    </div>
                    <div className="form-area">
                      <form action="#" method="POST">
                        <div className="form-group">
                          <input
                            type="text"
                            className="input-field"
                            id="input-name1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="input-field"
                            id="input-email1"
                            placeholder="Enter your Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="input-field"
                            id="input-password"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="input-field"
                            id="input-con-password"
                            placeholder="Enter your Confirm Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="check-group">
                            <input
                              type="checkbox"
                              className="check-box-field"
                              id="input-terms"
                              defaultChecked
                            />
                            <label htmlFor="input-terms">
                              I agree with <a href="#">terms and Conditions</a>{" "}
                              and <a href="#">privacy policy</a>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="mybtn2">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
  );
}

export default Header;
