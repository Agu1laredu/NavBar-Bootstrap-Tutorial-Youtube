import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/3.png";
import "./navbar.css";

import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsChatSquareTextFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function NavbarReutilizable() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="Container">
        <Navbar.Brand>
          <Link to={`/`}>
            <img src={Logo} alt="Logotipo" className="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "center" }}>
            <Nav.Link
              style={{
                margin: "auto",
              }}
            >
              <Link
                to={`/`}
                style={{ textDecoration: "none", color: "black" }}
                className="Link"
              >
                <BsFillHouseDoorFill />
              </Link>
            </Nav.Link>
            <Nav.Link
              style={{
                margin: "auto",
              }}
            >
              <Link
                to={`/Nosotros`}
                style={{ textDecoration: "none", color: "black" }}
                className="Link"
              >
                <p>
                  <BsPeopleFill />
                </p>
              </Link>
            </Nav.Link>
            <Nav.Link
              style={{
                margin: "auto",
              }}
            >
              <Link
                to={`/Contacto`}
                style={{ textDecoration: "none", color: "black" }}
                className="Link"
              >
                <p>
                  <BsChatSquareTextFill />
                </p>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReutilizable;
