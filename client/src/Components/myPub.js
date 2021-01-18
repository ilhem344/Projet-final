// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../../JS/actions/listVet/listVet";
import Contact from "../Components/vetList/vetCard";
import { Dimmer, Loader, Search } from "semantic-ui-react";
import NavbarHome from "../Components/navabar/navbarHome";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
const MyPub = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contactReducer.contacts);
  // const loadContacts = useSelector(
  //   (state) => state.contactReducer.loadContacts
  // );
  const contacts = useSelector((state) => state.PubReducer.Pubs);
  const userId = useSelector((state) => state.vetReducer.vet.data.vet._id);
  const loadContacts = useSelector((state) => state.PubReducer.loadPub);
  const res = contacts.filter((el) => el.postedBy === userId);
  return (
    <div>
      <Button.Group>
        <Link to="/mypub">
          {" "}
          <Button positive> My annonces</Button>
        </Link>

        <Button.Or text="or" />
        <Link to="/createpub">
          <Button>Create annonce</Button>
        </Link>
      </Button.Group>
      {/* <NavbarHome /> */}
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {loadContacts ? (
            <Dimmer active>
              <Loader content="Loading" />
            </Dimmer>
          ) : res.length ? (
            res.map((el) => <Contact key={el._id} contact={el} edit={true} />)
          ) : (
            <h5>
              No annonce found click here to add add one
              <Link to="/createpub">Add a new announce </Link>{" "}
            </h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPub;
