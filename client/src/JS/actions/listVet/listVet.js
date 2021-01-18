import {
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCCESS,
  DELETE_CONTACT,
  GET_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT_BYNAME,
} from "../../const/listVet/listVet";
import axios from "axios";
import { current } from "../vet";
export const getContacts = (s) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/vet/name/?a=${s}`);
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error });
    console.log(error);
  }
};

// export const deleteContact = (id, s) => (dispatch) => {
//   axios
//     .delete(`/api/contact/${id}`)
//     .then((res) => dispatch(getContacts(s)))
//     .catch((err) => console.log(err));
// };

// export const getContact = (id) => (dispatch) => {
//   axios
//     .get(`/api/contact/${id}`)
//     .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.result }))
//     .catch((err) => console.log(err));
// };
// export const postContact = (user, s) => (dispatch) => {
//   axios
//     .post(`/api/contact/`, user)
//     .then((res) => dispatch(getContacts(s)))
//     .catch((err) => console.log(err));
// };

export const editContact = (user, id, history) => async (dispatch) => {
  await axios
    .put(`/vet/${id}`, user)
    .then((res) => {
      dispatch(getContacts(""));
      dispatch(current());
      console.log(res);
    })
    .catch((err) => console.log(err));
  history.push("/dashbordVet");
};
