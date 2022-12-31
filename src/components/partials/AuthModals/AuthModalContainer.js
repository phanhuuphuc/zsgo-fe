import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModalComponents from "./AuthModalsComponents";
import { login } from "@/redux/actions/auth";

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const btnCloseRef = useRef();
  const btnSubmitRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    comfirm_password: "",
  });
  
  const handleSubmitLogin = useCallback(() => {
    dispatch(login(loginForm.email, loginForm.password))
      .then(() => {
        handleCloseModal();
      })
      .catch(() => {});
  }, [dispatch, loginForm.email, loginForm.password]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSubmitLogin();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmitLogin]);

  console.log(isLoggedIn);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(registerForm);
  };

  const handleCloseModal = () => {
    btnCloseRef.current.click();
  };

  const handleLogOut = () => {
    console.log("Log out");
  };

  return (
    <LoginModalComponents
      handleSubmitLogin={handleSubmitLogin}
      setLoginForm={setLoginForm}
      btnCloseRef={btnCloseRef}
      btnSubmitRef={btnSubmitRef}
      loginForm={loginForm}
      setRegisterForm={setRegisterForm}
      registerForm={registerForm}
      handleLogOut={handleLogOut}
      handleCloseModal={handleCloseModal}
      handleSubmitRegister={handleSubmitRegister}
    />
  );
};

export default LoginModalContainer;
