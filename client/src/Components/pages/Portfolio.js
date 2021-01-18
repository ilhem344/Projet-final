import React from "react";
import Profile from "../Profile";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <Button.Group>
        <Link to="/mypub">
          {" "}
          <Button>My announces</Button>
        </Link>

        <Button.Or text="or" />
        <Link to="/createpub">
          <Button>Create announce</Button>
        </Link>
      </Button.Group>
      <Profile />
    </div>
  );
}
