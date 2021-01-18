import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { editContact, postContact } from "../JS/actions/listVet/listVet";
import { current } from "../JS/actions/vet";
import { Link, useHistory } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  const history = useHistory();
  const vet = useSelector((state) => state.vetReducer.current);
  const loading = useSelector((state) => state.vetReducer.loadUser);
  const isAuth = useSelector((state) => state.vetReducer.isAuth);
  const [user, setuser] = useState(vet);

  const handleContact = () => {
    dispatch(editContact(user, vet._id, history));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
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
      <Form>
        <Form.Field>
          <label> Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={user.name}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter your phone"
            value={user.phoneNumber}
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

      <h3>fjdsdk</h3>
    </div>
  );
};

export default Edit;
