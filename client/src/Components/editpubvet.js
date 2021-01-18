import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
// import { editContact, postContact } from "../JS/actions/listVet/listVet";
import { Link, useHistory } from "react-router-dom";
import { editPub, getPub } from "../JS/actions/Posts/Posts";
import { Dimmer, Loader } from "semantic-ui-react";

const EditPubVet = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const myPub = useSelector((state) => state.PubReducer.Pub.result);
  const [newPub, setnewPub] = useState(myPub);
  useEffect(() => {
    setnewPub(myPub);
  }, [myPub]);
  const isloading = useSelector((state) => state.PubReducer.loadPub);

  const handleContact = () => {
    dispatch(editPub(myPub._id, newPub, "", history));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setnewPub({ ...newPub, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        marginTop: "50px",
        // width: "500px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isloading ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : newPub ? (
        <Form>
          <Form.Field>
            <label> Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              value={newPub.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label> Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={newPub.lastName}
              name="lastName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={newPub.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>description</label>
            <input
              type="text"
              placeholder="Enter description"
              value={newPub.description}
              name="description"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>adresse</label>
            <input
              type="text"
              placeholder="Enter your adress"
              value={newPub.adresse}
              name="adresse"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>title</label>
            <input
              type="text"
              placeholder="title"
              value={newPub.parcoursAcademique}
              name="parcoursAcademique"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label> phone Number</label>
            <input
              placeholder="Enter your phone number"
              value={newPub.phoneNumber}
              name="phoneNumber"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Form.Field>

          <Link to="/">
            {" "}
            <Button type="submit" onClick={() => handleContact()}>
              Save
            </Button>
          </Link>
        </Form>
      ) : (
        <h3>loaading</h3>
      )}
    </div>
  );
};

export default EditPubVet;
