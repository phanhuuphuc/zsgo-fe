import React, { useState } from 'react';

import LoginModalComponents from './AuthModalsComponents';
const LoginModalContainer = () => {
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
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if(loginForm.email!="" && loginForm.password!=""){
      let data = {
        email: loginForm.email,
        password: loginForm.password,

    };
      console.log(data)
      // fetch('http://127.0.0.1:8000/api/users/login', requestOptions)
      // .then(res => res.json())
      // .then(json =>{
      //     console.log(json)
      // });
  }

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