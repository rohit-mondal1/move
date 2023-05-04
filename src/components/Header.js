import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand to="/"> <Link to="/">Navbar scroll</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
               
              </Nav.Link>
              <Nav.Link href="#action2">
                
              </Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets"><Link to="/">Services</Link></Nav.Link>
            <Nav.Link eventKey={2} href="/">
            <Link to="/">Home</Link>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
