import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPub } from "../JS/actions/Posts/Posts";
import NavbarHome from "./navabar/navbarHome";
import { Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CreatePubVet = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [adresse, setadresse] = useState("");
  const [description, setdescription] = useState("");
  const [parcoursAcademique, setparcoursAcademique] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const [post, setpost] = useState({
    name,
    lastName,
    adresse,
    description,
    parcoursAcademique,
    phoneNumber,
    email,
    photo: url,
  });
  const handleClick = () => {
    postDetails();
    url ? (
      setpost({
        ...post,
        name,
        lastName,
        phoneNumber,
        adresse,
        description,
        parcoursAcademique,
        email,
        photo: url,
      })
    ) : (
      <Dimmer active>
        <Loader content="Loading" />
      </Dimmer>
    );
    // dispatch(createPost(post, history));
  };

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "AnnonceFolder");
    data.append("cloud_name", "ilhem");
    fetch("https://api.cloudinary.com/v1_1/ilhem/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  // useEffect(() => {
  //   dispatch(createPub(post, history));
  // }, [url]);
  useEffect(() => {
    dispatch(createPub(post, history));
  }, [url]);
  return (
    <div>
      {" "}
      <Button.Group>
        <Link to="/mypub">
          {" "}
          <Button>My Annonces </Button>
        </Link>

        <Button.Or text="or" />
        <Link to="/createpub">
          <Button positive>Create an Annonce </Button>
        </Link>
      </Button.Group>
      <div
        className="card input-filed"
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          type="email"
          placeholder=" email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse"
          value={adresse}
          onChange={(e) => setadresse(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Parcours Academique"
          value={parcoursAcademique}
          onChange={(e) => setparcoursAcademique(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone Number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Uplaod Image</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => {
            handleClick();
          }}
        >
          Submit post
        </button>
      </div>
    </div>
  );
};

export default CreatePubVet;
