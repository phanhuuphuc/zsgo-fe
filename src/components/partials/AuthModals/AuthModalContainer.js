import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import LoginModalComponents from './AuthModalsComponents';
import { login } from "@/redux/actions/auth";

const LoginModalContainer = () => {
  let navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    comfirm_password: ""
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    // setLoading(true);

    // form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(loginForm.email, loginForm.password))
        .then(() => {
          // navigate("/help");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    // } else {
    //   setLoading(false);
    // }

    // console.log('Login');
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(registerForm);
  };

  return (
    <LoginModalComponents
      handleSubmitLogin={handleSubmitLogin}
      setLoginForm={setLoginForm}
      loginForm={loginForm}
      setRegisterForm={setRegisterForm}
      registerForm={registerForm}
      handleSubmitRegister={handleSubmitRegister}
    />
  );
}

export default LoginModalContainer;