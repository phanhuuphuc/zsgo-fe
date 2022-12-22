import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { toast } from 'react-toastify';


export default combineReducers({
  auth,
  message,
  // toast 
});
