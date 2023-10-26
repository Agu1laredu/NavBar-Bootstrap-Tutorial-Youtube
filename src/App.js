import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/3.png";
import Poligono from "./assets/Poligonos/Polygon1.png";
import Poligono2 from "./assets/Poligonos/Polygon2.png";
import Poligono4 from "./assets/Poligonos/Polygon4.png";
import Poligono3 from "./assets/Poligonos/Polygon3.png";
import Poligono5 from "./assets/Poligonos/Polygon5.png";
import Poligono6 from "./assets/Poligonos/Polygon6.png";
import Poligono7 from "./assets/Poligonos/Polygon7.png";
import Poligono10 from "./assets/Poligonos/Polygon10.png";
import "./App.css";
import SobreNosotros from "./screen/Nosotros/Nosotros";
import Clients from "./screen/NuestrosClientes/Clientes";
import Servicios from "./screen/Servicios/Servicios";

function Home() {
  return (
    <div style={{ display: "grid" }} className="ContainerMax">
      <div className="App">
        <Container className="Container">
          <Navbar.Brand>
            <Link to={`/`}>
              <img src={Logo} alt="Logotipo" className="Logo" />
            </Link>
          </Navbar.Brand>
        </Container>
        <section>
          <h1>Desarrollo Web personalizado y a tu medida</h1>
          <button className="Button">
            <span className="Span">Presupuesto</span>
          </button>
        </section>
        <img src={Poligono10} alt="Logotipo" className="Poligono11" />
        <img src={Poligono10} alt="Logotipo" className="Poligono10" />
        <img src={Poligono} alt="Logotipo" className="Poligono1" />
        <img src={Poligono2} alt="Logotipo" className="Poligono9" />
        <img src={Poligono3} alt="Logotipo" className="Poligono2" />
        <img src={Poligono4} alt="Logotipo" className="Poligono3" />
        <img src={Poligono5} alt="Logotipo" className="Poligono5" />
        <img src={Poligono6} alt="Logotipo" className="Poligono6" />
        <img src={Poligono7} alt="Logotipo" className="Poligono7" />
      </div>
      <SobreNosotros />
      <Clients />
      <Servicios />
    </div>
  );
}

export default Home;
