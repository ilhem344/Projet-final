import { GET_POST_FAIL, GET_POST_SUCCESS, GET_POST_LOAD } from "../const/post";

const initialState = {
  Posts: [],
  loadPost: false,
  errors: null,
};

export const PostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOAD:
      return { ...state, loadPost: true };
    case GET_POST_SUCCESS:
      return { ...state, Posts: payload, loadPost: false };
    case GET_POST_FAIL:
      return { ...state, error: payload, loadPost: false };

    default:
      return state;
  }
};
