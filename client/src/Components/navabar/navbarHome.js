import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getContacts } from "../../JS/actions/listVet/listVet";
import { logout } from "../../JS/actions/vet";
import { logoutuser } from "../../JS/actions/user";
import { getAllPubs } from "../../JS/actions/Posts/Posts";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Form,
  Button,
  Dropdown,
  FormControl,
  Nav,
  NavLink,
} from "react-bootstrap";

const NavbarHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthUser = useSelector((state) => state.userReducer.isAuth);
  const isAuthVet = useSelector((state) => state.vetReducer.isAuth);
  const isAuth = isAuthUser || isAuthVet;

  const [searchItem, setsearchItem] = useState("");
  const handleSearchChange = (e) => {
    setsearchItem(e.target.value);
  };
  // useEffect(() => {
  //   dispatch(getContacts(searchItem));
  // }, [searchItem]);
  useEffect(() => {
    dispatch(getAllPubs(searchItem));
    dispatch(getContacts(""));
  }, [searchItem]);
  return (
    <div>
      {!isAuth ? (
        <div>
          <Navbar
            bg="dark"
            variant="dark"
            style={{ top: "0", left: "0", width: "100%", position: "fixed" }}
          >
            <Navbar.Brand>Let's save animals</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink href="/">Home</NavLink>
              <Nav.Link href="/allposts">Forum</Nav.Link>
              <Nav.Link href="/sign-in-veterinaire">Sign in Doctor</Nav.Link>
              <Nav.Link href="/sign-in-user">Sign in </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                onChange={(e) => {
                  handleSearchChange(e);
                }}
                value={searchItem}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
      ) : isAuthVet ? (
        <div>
          {" "}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Let's save animals</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="/forumpage">
                {" "}
                <Nav.Link href="/forumpage">Forum</Nav.Link>
              </Link>
              <Link to="/portfolio">
                {" "}
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Link>

              <Link to="/sign-in-user">
                {" "}
                <Nav.Link
                  href="/sign-in-user"
                  onClick={() => {
                    dispatch(logout());
                    history.push("/");
                  }}
                >
                  Logout
                </Nav.Link>
              </Link>
            </Nav>
            <Form inline>
              <FormControl
                onChange={(e) => {
                  handleSearchChange(e);
                }}
                value={searchItem}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
      ) : (
        <div>
          {" "}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Let's save animals</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">
                {" "}
                <Nav.Link href="/"> Home </Nav.Link>
              </Link>
              <Link to="/forumpage">
                {" "}
                <Nav.Link href="/forumpage">Forum</Nav.Link>
              </Link>
              <Link to="/sign-in_user">
                <Nav.Link
                  href="/sign-in_user"
                  onClick={() => {
                    dispatch(logoutuser());
                    history.push("/");
                  }}
                >
                  Logout
                </Nav.Link>
              </Link>
            </Nav>
            <Form inline>
              <FormControl
                onChange={(e) => {
                  handleSearchChange(e);
                }}
                value={searchItem}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
      )}
    </div>
  );
};

export default NavbarHome;
