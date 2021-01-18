import React from "react";
import { getAllPosts } from "../JS/actions/Posts/Posts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

import Article from "./article";
import NavbarHome from "./navabar/navbarHome";

const Forum = ({ check }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const result = useSelector((state) => state.PostReducer.Posts.posts);
  const isLoading = useSelector((state) => state.PostReducer.loadPost);
  //   const [allposts, setposts] = useState([posts]);
  return (
    <div>
      {/* <NavbarHome /> */}
      <h3>this is the forum</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {isLoading ? (
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>
        ) : result ? (
          result.map((el) => <Article key={el._id} post={el} check={check} />)
        ) : (
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>
        )}
      </div>
    </div>
  );
};

export default Forum;
