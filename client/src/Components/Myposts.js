import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../JS/actions/Posts/Posts";
import { Dimmer, Loader } from "semantic-ui-react";
import Article from "./article";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import NavbarHome from "../Components/navabar/navbarHome";
const MyPosts = ({ check }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, []);
  const MyPosts = useSelector((state) => state.VetPostReducer.MyPosts.mypost);
  const isLoading = useSelector((state) => state.VetPostReducer.loadPost);
  return (
    <div>
      <h3> my Posts</h3>
      {/* <NavbarHome /> */}
      <Button.Group>
        <Link to="/post/createpostvet">
          {" "}
          <Button>create post</Button>
        </Link>

        <Button.Or text="or" />
        <Link to="/mypost">
          <Button positive>My posts</Button>
        </Link>
      </Button.Group>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <Dimmer active>
            <Loader content="Loading" />
          </Dimmer>
        ) : MyPosts ? (
          MyPosts.length ? (
            MyPosts.map((el) => (
              <Article key={el._id} post={el} check={check} />
            ))
          ) : (
            <h3>
              No posts found click here to add add one
              <Link to="/post/createpostvet">Add a new announce </Link>
            </h3>
          )
        ) : null}
      </div>
    </div>
  );
};

export default MyPosts;
