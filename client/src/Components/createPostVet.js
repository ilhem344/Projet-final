import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../JS/actions/Posts/Posts";
import NavbarHome from "./navabar/navbarHome";
import { Dimmer, Loader } from "semantic-ui-react";
import { Button as Buttonsemantic } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const CreatePostVet = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const [post, setpost] = useState({ title, body, pic: url });
  const handleClick = () => {
    postDetails();
    url ? (
      setpost({ ...post, title, body, pic: url })
    ) : (
      <Dimmer active>
        <Loader content="Loading" />
      </Dimmer>
    );
    // dispatch(createPost(post, history));
  };
  useEffect(() => {
    dispatch(createPost(post, history));
  }, [url]);
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "PostsFolder");
    data.append("cloud_name", "ilhem");
    fetch("https://api.cloudinary.com/v1_1/ilhem/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Buttonsemantic.Group>
        <Link to="/post/createpostvet">
          {" "}
          <Buttonsemantic positive>create posts</Buttonsemantic>
        </Link>

        <Buttonsemantic.Or text="or" />
        <Link to="/mypost">
          <Buttonsemantic>My posts</Buttonsemantic>
        </Link>
      </Buttonsemantic.Group>
      <div
        className="card input-filed"
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* <NavbarHome /> */}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <label for="file"> Upload your picture</label>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {/* <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div> */}
        </div>
        {/* <button
        className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={() => {
          handleClick();
        }}
      >
        Submit post
      </button> */}
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={() => {
            handleClick();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default CreatePostVet;
