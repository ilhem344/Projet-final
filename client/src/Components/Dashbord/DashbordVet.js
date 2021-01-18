import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, current } from "../../JS/actions/vet";
import { useHistory } from "react-router-dom";
import Home from "../../home";
const DashbordVet = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(current());
  // }, []);
  return (
    <div>
      {/* <button
        onClick={() => {
          dispatch(logout());
          history.push("/")
        }}
      >
        Logout
      </button> */}
      Dashbord VET
      <Home />
      {/* <Homea /> */}
    </div>
  );
};

export default DashbordVet;
