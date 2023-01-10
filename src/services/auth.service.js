import axios from "axios";
import { toast } from "react-toastify";
import { REQUEST_SUCCESS } from "@/constants/constants";
const API_URL = "http://highspeed.test/api/auth/";

const register = (formData) => {
  return axios.post(API_URL + "register", {
    data:formData 
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
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
