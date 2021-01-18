import axios from "axios";
import {
  GET_POST_SUCCESS,
  GET_POST_LOAD,
  GET_POST_FAIL,
  GET_MY_POST_LOAD,
  GET_MY_POST_SUCCESS,
  GET_MY_POST_FAIL,
  GET_PUB_FAIL,
  GET_PUB_LOAD,
  GET_PUB_SUCCESS,
  GET_PUB,
} from "../../const/post";
export const createPost = (post, history) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/posts/createpost", post, options);
    history.push("/dashbordVet");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: GET_POST_LOAD });
  try {
    let result = await axios.get(`/posts/allpost`);
    dispatch({ type: GET_POST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error });
    console.log(error);
  }
};

export const getMyPosts = () => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: GET_MY_POST_LOAD });
  try {
    let result = await axios.get(`/posts/mypost`, options);
    dispatch({ type: GET_MY_POST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_MY_POST_FAIL, payload: error });
    console.log(error);
  }
};
export const deletePost = (postid, location) => async (dispatch) => {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`posts/deletepost/${postid}`, options);
    document.location.reload();
  } catch (error) {
    console.log(error);
  }
};
// export const makeComment = (text, postId) => async (dispatch) => {
//   const options = {
//     headers: {
//       "Content-type": "application/json",
//       authorization: localStorage.getItem("token"),
//     },
//   };
//   try {
//     await axios.put("/posts/comment", text, postId, options);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const createPub = (pub, history) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/posts/createpub", pub, options);
    history.push("/dashbordVet");
    console.log(res);
  } catch (error) {
    console.log(error.data);
  }
};

// export const getAllPubs = () => async (dispatch) => {
//   dispatch({ type: GET_PUB_LOAD });
//   try {
//     let result = await axios.get(`/posts/allpub`);
//     dispatch({ type: GET_PUB_SUCCESS, payload: result.data });
//   } catch (error) {
//     dispatch({ type: GET_PUB_FAIL, payload: error });
//     console.log(error);
//   }
// };
export const getAllPubs = (s) => async (dispatch) => {
  dispatch({ type: GET_PUB_LOAD });
  try {
    let result = await axios.get(`/posts/?a=${s}`);
    dispatch({ type: GET_PUB_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_PUB_FAIL, payload: error });
    console.log(error);
  }
};
export const editPub = (id, pub, s, history) => async (dispatch) => {
  // const options = {
  //   headers: {
  //     authorization: localStorage.getItem("token"),
  //   },
  // };
  // try {
  //   let result = await axios.put(`/posts/edit/${id}`, pub);
  //   console.log(result);
  //   dispatch(getAllPubs(s));
  //   // history.push("/dashbordVet");
  // } catch (error) {
  //   console.log(error);
  // }
  await axios
    .put(`/posts/edit/${id}`, pub)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  history.push("/dashbordVet");
};
export const getPub = (id) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get(`/posts/pub/${id}`, options);
    dispatch({ type: GET_PUB, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
// export const getMyPub = () => async (dispatch) => {
//   const options = {
//     headers: {
//       authorization: localStorage.getItem("token"),
//     },
//   };
//   dispatch({ type: GET_MY_PUB_LOAD });
//   try {
//     let result = await axios.get(`/posts/mypub`, options);
//     dispatch({ type: GET_MY_PUB_SUCCESS, payload: result.data });
//   } catch (error) {
//     dispatch({ type: GET_MY_PUB_FAIL, payload: error });
//     console.log(error);
//   }
// };
// export const deletePost = (postid, history) => async (dispatch) => {
//   const options = {
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     },
//   };
//   try {
//     await axios.delete(`posts/deletepost/${postid}`, options);
//     history.push("/dashbordVet");
//   } catch (error) {
//     console.log(error);
//   }
// };
