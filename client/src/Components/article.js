import React, { useState } from "react";
import { Button, Card, Image, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../JS/actions/Posts/Posts";
import { useLocation, useHistory, Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from "@material-ui/icons/Delete";
import "./article.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const Article = ({ post, check }) => {
  const location = useLocation();
  const [clicked, setclicked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [newComment, setnewComment] = useState("");
  const [likes, setlikes] = useState(post.likes);
  const [likesdata, setlikesdata] = useState(post.likes);
  const isAuthVet = useSelector((state) => state.vetReducer.isAuth);
  const isAuthUser = useSelector((state) => state.userReducer.isAuth);
  const isAuth = isAuthUser || isAuthVet;
  const [data, setdata] = useState(post.comments);
  const [singlepost, setsinglepost] = useState(post);
  const id = post._id;
  const makeComment = (text, postId) => {
    fetch("/posts/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setdata(result.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleClass = (e) => {
    setclicked(!clicked);
  };
  const likePost = (id) => {
    fetch("posts/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setlikes(result.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const unlikePost = (id) => {
    fetch("posts/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        setlikes(result.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={singlepost.title}
          // subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={singlepost.photo}
          // title="Paella dish"
        />
        <CardContent>
          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
          <h4> {singlepost.title}</h4>
          {/* </Typography> */}
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {singlepost.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {isAuthVet ? (
              <FavoriteIcon
                onClick={() => {
                  toggleClass();
                  !clicked ? likePost(id) : unlikePost(id);
                }}
                style={clicked ? { color: "red" } : { color: "grey" }}
              />
            ) : (
              <Link to="sign-in-user">
                <FavoriteIcon />
              </Link>
            )}
            <span>
              {likes.length !== 0 ? <span>{likes.length}</span> : null}
            </span>
          </IconButton>
        </CardActions>
        {isAuth ? (
          <div>
            <CardActions>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse
              label="show more"
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                {/* <Typography paragraph>Comments</Typography> */}
                {/* <Typography paragraph> */}
                {data.length ? (
                  data.map((el) => (
                    <div
                      style={{
                        border: "solid 0.2px black",
                        marginTop: "5px",
                        borderRadius: "3px",
                      }}
                    >
                      {el.text}
                    </div>
                  ))
                ) : (
                  <h6>no comments feel free to add one</h6>
                )}
                {/* </Typography> */}
                <Typography>
                  <input
                    style={{ border: "solid 3px black" }}
                    placeholder="add your comment"
                    name="comment"
                    onChange={(e) => {
                      e.preventDefault();
                      setnewComment(e.target.value);
                    }}
                  />{" "}
                  <Button
                    type="submit"
                    onClick={() => {
                      makeComment(newComment, id);
                    }}
                  >
                    Save
                  </Button>
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        ) : (
          <Link to="sign-in-user">
            {" "}
            <CardContent>please sign in to view comments</CardContent>
          </Link>
        )}
        <CardContent>
          {" "}
          {!check ? (
            <Button
              variant="contained"
              color="red"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => {
                dispatch(deletePost(id, location));
              }}
            >
              Delete
            </Button>
          ) : null}
        </CardContent>
      </Card>
      {/* <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={singlepost.photo} />
          <Card.Header>{singlepost.title}</Card.Header>
          <Card.Meta>{singlepost.body}</Card.Meta>{" "}
          {data.map((el) => (
            <h3>{el.text}</h3>
          ))}
        </Card.Content>

        <Form.Field>
          <label>comments</label>
          <input
            placeholder="add your comment"
            name="comment"
            onChange={(e) => {
              e.preventDefault();
              setnewComment(e.target.value);
            }}
          />
        </Form.Field>
        <Button
          type="submit"
          onClick={() => {
            makeComment(newComment, id);
          }}
        >
          Save
        </Button>
        {!check ? (
          <Button
            type="submit"
            onClick={() => {
              dispatch(deletePost(id, history));
            }}
          >
            Delete
          </Button>
        ) : null}

        <FontAwesomeIcon
          onClick={() => {
            toggleClass();
            !clicked ? likePost(id) : unlikePost(id);
          }}
          size={"sm"}
          icon={faHeart}
          style={clicked ? { color: "red" } : { color: "grey" }}
        />
        {likes.length !== 0 ? <span>{likes.length}</span> : null}
      </Card>  */}
    </div>
  );
};

export default Article;
