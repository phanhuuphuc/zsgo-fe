import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import LoginModalComponents from './AuthModalsComponents';
import {  toast } from 'react-toastify';
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


  const [loading, setLoading] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  // const { message } = useSelector(state => state.message);
  console.log(isLoggedIn)
  // console.log(message)
  
  const dispatch = useDispatch();
  const handleSubmitLogin = (e) => {
    
      dispatch(login(loginForm.email, loginForm.password))
        .then(() => {
          // navigate("/help");
          
          setCloseModal(true)
        })
        .catch(() => {
          // setLoading(false);
        });
    // } else {
    //   setLoading(false);
    // }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(registerForm);
  };

  const handleCloseModal = () => {
    setCloseModal(true);
  };

  const handleLogOut = () => {
    console.log('Log out');
  };

  return (
    <LoginModalComponents
      handleSubmitLogin={handleSubmitLogin}
      setLoginForm={setLoginForm}
      loginForm={loginForm}
      setRegisterForm={setRegisterForm}
      registerForm={registerForm}
      handleLogOut={handleLogOut}
      closeModal={closeModal}
      handleSubmitRegister={handleSubmitRegister}
    />
  );
}

export default LoginModalContainer;