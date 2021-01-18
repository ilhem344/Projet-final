import {
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_LOAD,
  GET_CONTACT,
} from "../const/listVet/listVet";
let initialState = {
  contacts: [],
  loadContacts: false,
  error: null,
  user: {},
};
export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACT_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACT_FAIL:
      return { ...state, error: payload, loadContacts: false };
    case GET_CONTACT:
      return { ...state, user: payload };

    default:
      return state;
  }
};
