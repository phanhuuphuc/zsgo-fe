import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

const LoginModalComponents = () => {
  return (
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
                <Link
                  className="nav-link mybtn2 active"
                  id="pills-m_login-tab"
                  data-toggle="pill"
                  href="#pills-m_login"
                  role="tab"
                  aria-controls="pills-m_login"
                  aria-selected="true"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link mybtn2"
                  id="pills-m_register-tab"
                  data-toggle="pill"
                  href="#pills-m_register"
                  role="tab"
                  aria-controls="pills-m_register"
                  aria-selected="false"
                >
                  Register
                </Link>
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
                        Forgot your password? <Link href="#">recover password</Link>
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
                          I agree with <Link href="#">terms and Conditions</Link> and{" "}
                          <Link href="#">privacy policy</Link>
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
  );
};

export default LoginModalComponents;
