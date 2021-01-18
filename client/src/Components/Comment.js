import React from "react";
import { Comment, Header } from "semantic-ui-react";

const OneComment = ({ singleComment }) => {
  //i need to import contact
  return (
    <div>
      <Comment.Group
        size="mini"
        style={{
          border: "solid 0.2px black",
          marginTop: "5px",
          borderRadius: "3px",
        }}
      >
        {/* <Header as="h3" dividing>
          Mini Comments
        </Header> */}

        <Comment>
          <Comment.Content>
            {/* <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata> */}
            <Comment.Text>{singleComment.text}</Comment.Text>
            {/* <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions> */}
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default OneComment;
