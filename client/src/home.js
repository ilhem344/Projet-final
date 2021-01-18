import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VetList from "./Components/vetList/vetList";

const Home = () => {
  return (
    <div>
      <img
        src="https://site-547756.mozfiles.com/files/547756/medium/Paw_to_Hand_Help_Companions_Dogs.jpg"
        height="400px"
        width="100%"
        style={{ marginTop: "50px", marginBottom: "20px" }}
      />

      <VetList />
    </div>
  );
};

export default Home;
