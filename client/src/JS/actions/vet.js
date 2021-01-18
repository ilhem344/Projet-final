import {
  LOAD_VET,
  REGISTER_VET,
  LOGIN_VET,
  FAIL_VET,
  LOGOUT_VET,
  CURRENT_VET,
} from "../const/vet";
import M from "materialize-css";

import axios from "axios";

export const registerUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_VET });
  try {
    const result = await axios.post("/vet/register", user);
    //{user,msg,token}
    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_VET, payload: result });
    history.push("/dashbordVet");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    // dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_VET });
  try {
    const result = await axios.post("/vet/login", user);
    //{user,msg,token}
    dispatch({ type: LOGIN_VET, payload: result });

    history.push("/dashbordVet");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
      alert(msg);
    }
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_VET });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/vet/current", options);
    //  user
    dispatch({ type: CURRENT_VET, payload: result.data.veterinaire });
  } catch (error) {
    dispatch({ type: FAIL_VET, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_VET,
  };
};
