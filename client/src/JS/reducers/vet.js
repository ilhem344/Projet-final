import {
  LOAD_VET,
  REGISTER_VET,
  LOGIN_VET,
  FAIL_VET,
  LOGOUT_VET,
  CURRENT_VET,
} from "../const/vet";

const initialState = {
  vet: null,
  loadUser: false,
  errors: null,
  isAuth: false,
  current: null,
};

export const vetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_VET:
      localStorage.setItem("token", payload.data.token);
      return { ...state, loadUser: false, vet: payload, isAuth: true };
    case LOGIN_VET:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        loadUser: false,
        vet: payload,
        isAuth: true,
      };
    case LOAD_VET:
      return { ...state, loadUser: true };
    case CURRENT_VET:
      return {
        ...state,
        loadUser: false,
        isAuth: true,
        current: payload,
      };
    case FAIL_VET:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_VET:
      localStorage.removeItem("token");
      return { vet: null, loadUser: false, errors: null, isAuth: false };
    default:
      return state;
  }
};
