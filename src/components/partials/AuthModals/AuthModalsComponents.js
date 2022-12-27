import React from "react";
import { Link } from "react-router-dom";
const LoginModalsComponents = (props) => {
  const setLoginForm        = props.setLoginForm;
  const loginForm           = props.loginForm;
  const setRegisterForm     = props.setRegisterForm;
  const registerForm        = props.registerForm;
  const handleCloseModal    = props.handleCloseModal;
  const btnCloseRef            = props.btnCloseRef;
  const btnSubmitRef            = props.btnSubmitRef;

  return (
    <div className="modal-dialog modal-dialog-centered " role="document">
      <div className="modal-content">
        <button
          ref={btnCloseRef}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => handleCloseModal()}
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
                data-target="#pills-m_login"
                role="tab"
                aria-controls="pills-m_login"
                aria-selected="true"
              >
                Đăng nhập
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link mybtn2"
                id="pills-m_register-tab"
                data-toggle="pill"
                data-target="#pills-m_register"
                role="tab"
                aria-controls="pills-m_register"
                aria-selected="false"
              >
                Đăng ký
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
                <h4 className="title">Welcome to ZSGo</h4>
              </div>
              <div className="form-area">
                {/* <form action="#" method="POST"> */}
                <div className="form-group">
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    placeholder="Tài khoản"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="input-field"
                    id="input-email"
                    name="password"
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    placeholder="Mật khẩu"
                  />
                </div>
                <div className="form-group">
                  <span>
                    Quên mật khẩu? <Link href="#">Click here</Link>
                  </span>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="mybtn2"
					ref={btnSubmitRef}
                    onClick={props.handleSubmitLogin}
                  >
                    Đăng nhập
                  </button>
                </div>
                {/* </form> */}
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
                  <span>Quà đăng ký</span>
                  <h4>Xe S 7ngày</h4>
                </span>
                <h4 className="title">Đăng ký và tận hưởng game</h4>
                <p className="text">
                  Điền vào form dưới đây để đăng ký tài khoản và nhận quà
                </p>
              </div>
              <div className="form-area">
                <form action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="input-field"
                      id="input-name1"
                      placeholder="Tài khoản"
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="input-field"
                      id="input-email1"
                      placeholder="Enter your Email"
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="input-field"
                      id="input-password"
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="input-field"
                      id="input-con-password"
                      placeholder="Enter your Confirm Password"
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          confirmPassword: e.target.value,
                        })
                      }
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
                    <button
                      type="submit"
                      className="mybtn2"
                      onClick={props.handleSubmitRegister}
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModalsComponents;
