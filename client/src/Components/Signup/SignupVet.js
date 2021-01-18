import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser, registerUser } from "../../JS/actions/vet";
import NavbarHome from "../navabar/navbarHome";
import "./Signup.css";
const SignupUser = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [description, setdescription] = useState("");
  const [parcoursAcademique, setparcoursAcademique] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <NavbarHome />
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          {/* Login Form */}
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign In"
                  onClick={() =>
                    dispatch(loginUser({ email, password }, history))
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            {/* sign up part */}
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName" className="label">
                  lastName
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Adresse
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  data-type="text"
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Description
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  data-type="text"
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  parcoursAcademique{" "}
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  data-type="text"
                  onChange={(e) => setparcoursAcademique(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Phone
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  data-type="text"
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </div>

              <div className="group">
                <input
                  className="button"
                  defaultValue="Sign Up"
                  onClick={() =>
                    dispatch(
                      registerUser(
                        {
                          name,
                          lastName,
                          email,
                          password,
                          adresse,
                          description,
                          parcoursAcademique,
                          phoneNumber,
                        },
                        history
                      )
                    )
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUser;
