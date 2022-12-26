import axios from "axios";
import { toast } from "react-toastify";
import { REQUEST_SUCCESS } from "@/components/constants/constants";
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
      if (
        response.data.data.accessToken &&
        response.data.status === true &&
        response.data.message === REQUEST_SUCCESS
      ) {
        return response.data;
      }
    })
    .catch((error) => {
      return error.response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  toast.success("🦄 Logout successfully!");
};

const exportedObject = {
  register,
  login,
  logout,
} 
export default exportedObject;
