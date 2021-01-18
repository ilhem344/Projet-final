import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dimmer, Loader, Search } from "semantic-ui-react";
import NavbarHome from "./navabar/navbarHome";
import { getAllPubs } from "../JS/actions/Posts/Posts";
const AllPub = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPubs(""));
  }, []);
  const result = useSelector((state) => state.PubReducer.Pubs);
  const isLoading = useSelector((state) => state.PostReducer.loadPub);
  return (
    <div>
      <h3>this is the forum</h3>
      {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        > */}
      {isLoading ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : result ? (
        result.map((el) => <h3>{el.adresse}</h3>)
      ) : (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      )}
    </div>
  );
};

export default AllPub;
