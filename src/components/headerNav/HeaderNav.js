import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="nave">
      <Navbar bg="dark" variant="dark" className="navcont">
        <Navbar.Brand className="blacklist">
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1078973018522537994/blacklist.png"
            alt="blacKLIST"
            className="blacklist"
          />
        </Navbar.Brand>
        <Nav className="me-auto navee">
          <Nav.Link>
            {" "}
            <Link
              className="headtitle"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              Members
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to={"/Category"}
              className="headtitle"
              style={{ textDecoration: "none" }}
            >
              Race Cars
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to={"/RaceRules"} className="headtitle">
              {" "}
              Race Rules
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to={"/Category/Drift"} className="headtitle">
              {" "}
              Drift
            </Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to={"/Category/Drag"} className="headtitle">
              {" "}
              Drag
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
