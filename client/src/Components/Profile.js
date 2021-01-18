import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../JS/actions/vet";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import NavbarHome from "./navabar/navbarHome";
import { Card, Icon, Image } from "semantic-ui-react";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  const vet = useSelector((state) => state.vetReducer.vet.data.vet);
  const contact = useSelector((state) => state.contactReducer.contacts);
  const result = contact.filter((el) => el._id === vet._id);
  const loading = useSelector((state) => state.vetReducer.loadUser);
  const isAuth = useSelector((state) => state.vetReducer.isAuth);
  const [user, setuser] = useState(result[0]);

  const edit = "true";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      {loading ? (
        <h3>....loading</h3>
      ) : !isAuth ? (
        <Redirect to="/login" />
      ) : (
        <Card>
          <Card.Content>
            <Card.Header>{`${user.name} ${user.lastName}`}</Card.Header>
            <Card.Meta>
              <span className="date">{user.email}</span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">{user.phoneNumber}</span>
            </Card.Meta>

            <Card.Description>{user.adresse}</Card.Description>
            <Card.Description>{user.description}</Card.Description>
            <Card.Description>{user.parcoursAcademique}</Card.Description>
          </Card.Content>
        </Card>
        //     <div
        //       style={{
        //         display: "flex",
        //         flexDirection: "column",
        //         alignItems: "center",
        //       }}
        //     >
        //       <input value={user.name} type="text" />
        //       <input value={user.lastName} type="text" />
        //       <input value={user.phoneNumber} type="text" />
        //       <Link to={`/edit/${user._id}`}>
        //         <button>Edit</button>
        //       </Link>
        //     </div>
        //
      )}
    </div>
  );
};

export default Profile;
