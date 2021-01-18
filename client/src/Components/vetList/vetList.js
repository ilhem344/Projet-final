// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../../JS/actions/listVet/listVet";
import Contact from "./vetCard";
import { Dimmer, Loader, Search } from "semantic-ui-react";
import { getAllPubs } from "../../JS/actions/Posts/Posts";
import { getContacts } from "../../JS/actions/listVet/listVet";
const VetList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contactReducer.contacts);
  // const loadContacts = useSelector(
  //   (state) => state.contactReducer.loadContacts
  // );
  useEffect(() => {
    dispatch(getAllPubs(""));
    dispatch(getContacts(""));
  }, []);
  const contacts = useSelector((state) => state.PubReducer.Pubs);
  const loadContacts = useSelector((state) => state.PubReducer.loadPub);
  return (
    <div>
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
          ) : (
            contacts.map((el) => (
              <Contact key={el._id} contact={el} edit={false} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VetList;
