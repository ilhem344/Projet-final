import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
// import { deleteContact, getContact } from "../JS/actions/contacts";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { toggleTrue } from "../JS/actions/edit";
import { getPub } from "../../JS/actions/Posts/Posts";
import { Dropdown } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardImg } from "react-bootstrap";
import { red } from "@material-ui/core/colors";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
const Contact = ({ contact, edit }) => {
  const dispatch = useDispatch();
  const isAuthUser = useSelector((state) => state.userReducer.isAuth);
  const isAuthVet = useSelector((state) => state.vetReducer.isAuth);
  const isAuth = isAuthUser || isAuthVet;
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
      <Card>
        <Card.Content>
          <CardMedia
            className={classes.media}
            image={contact.photo}
            // title="Paella dish"
          />
          {/* <CardImg src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"></CardImg> */}
          {/* <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          /> */}
          <Card.Header>
            <span>{`${contact.name} ${contact.lastName}`}</span>
          </Card.Header>
          <Card.Description>{contact.adresse} </Card.Description>
          {isAuth ? (
            <div>
              <Card.Description>{contact.phoneNumber} </Card.Description>
              <Card.Description>{contact.email} </Card.Description>
              <Card.Description>{contact.description} </Card.Description>
            </div>
          ) : (
            <Link to="sign-in-user">sign in for more details</Link>
          )}
        </Card.Content>
        {edit ? (
          <Link to={`/editpub/${contact._id}`}>
            <button onClick={() => dispatch(getPub(contact._id))}>edit</button>
          </Link>
        ) : null}
      </Card>
    </div>
  );
};

export default Contact;
