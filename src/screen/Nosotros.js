import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link
                  to={`/`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={`/Nosotros`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Nosotros
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to={`/Contacto`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contacto
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2>Nosotros</h2>
    </div>
  );
}

export default Nosotros;
