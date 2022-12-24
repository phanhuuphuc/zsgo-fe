import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://highspeed.test/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        toast.success("🦄 Login successfully!");
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      toast.error("🦄" + error.message);
    });
};

const logout = () => {
  localStorage.removeItem("user");
  toast.success("🦄 Logout successfully!");
};

export default {
  register,
  login,
  logout,
};
