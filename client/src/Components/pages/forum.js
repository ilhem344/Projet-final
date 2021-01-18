import React from "react";
import Forum from "../Forum";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function ForumPage() {
  return (
    <>
      <Button.Group>
        <Link to="/post/createpostvet">
          {" "}
          <Button>create posts</Button>
        </Link>

        <Button.Or text="or" />
        <Link to="/mypost">
          <Button>My posts</Button>
        </Link>
      </Button.Group>
      <Forum check={true} />
    </>
  );
}
