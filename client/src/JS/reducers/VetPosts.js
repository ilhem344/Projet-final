import {
  GET_MY_POST_FAIL,
  GET_MY_POST_SUCCESS,
  GET_MY_POST_LOAD,
} from "../const/post";

const initialState = {
  MyPosts: [],
  loadPost: false,
  errors: null,
};

export const VetPostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MY_POST_LOAD:
      return { ...state, loadPost: true };
    case GET_MY_POST_SUCCESS:
      return { ...state, MyPosts: payload, loadPost: false };
    case GET_MY_POST_FAIL:
      return { ...state, error: payload, loadPost: false };

    default:
      return state;
  }
};
