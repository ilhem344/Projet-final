import {
  GET_PUB,
  GET_PUB_FAIL,
  GET_PUB_SUCCESS,
  GET_PUB_LOAD,
} from "../const/post";

const initialState = {
  Pubs: [],
  loadPub: false,
  errors: null,
  Pub: {},
};

export const PubReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PUB_LOAD:
      return { ...state, loadPub: true };
    case GET_PUB_SUCCESS:
      return { ...state, Pubs: payload, loadPub: false };
    case GET_PUB_FAIL:
      return { ...state, error: payload, loadPub: false };
    case GET_PUB:
      return { ...state, Pub: payload };
    default:
      return state;
  }
};
