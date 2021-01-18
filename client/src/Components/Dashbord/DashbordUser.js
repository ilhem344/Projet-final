import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import Home from "../../home";

const DashbordUser = () => {
  // useEffect(() => {
  //   dispatch(current());
  // }, []);
  return (
    <div>
      Dashbord User
      <Home />
    </div>
  );
};

export default DashbordUser;
