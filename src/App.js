import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LandingPage from "../src/assets/ImagenesCards/1.png";
import Ecommerce from "../src/assets/ImagenesCards/2.png";
import Gestion from "../src/assets/ImagenesCards/3.png";
import Asesoramiento from "../src/assets/ImagenesCards/4.png";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h1>DIGITAL MOON</h1>
      <div className="CardsContainer">
        <Card
          style={{
            border: "2px solid rgba(11, 11, 11, 0.42)",
          }}
          className="Card"
        >
          <Card.Img variant="top" src={LandingPage} />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Una Landing Page es una página web específicamente diseñada con
                un enfoque claro y concreto.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Su principal objetivo es guiar a los visitantes hacia una acción
                deseada, como comprar un producto, suscribirse a un servicio o
                completar un formulario.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Estas páginas son visualmente atractivas, utilizando colores y
                diseño cautivadores para captar la atención del usuario.
              </li>
            </Card.Text>
            <Button variant="dark">Ver Más</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            border: "2px solid rgba(11, 11, 11, 0.42)",
          }}
          className="Card"
        >
          <Card.Img variant="top" src={Ecommerce} />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Los pagos se realizan a través de diversas opciones, como
                tarjetas de crédito, transferencias bancarias o servicios de
                pago en línea.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Es una plataforma que permite a los negocios alcanzar una
                audiencia global y ofrecer sus productos las 24 horas del día,
                los 7 días de la semana.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Los clientes pueden explorar catálogos en línea, agregar
                productos al carrito de compras y realizar transacciones de
                forma segura.
              </li>
            </Card.Text>
            <Button variant="dark">Ver Más</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            border: "2px solid rgba(11, 11, 11, 0.42)",
          }}
          className="Card"
        >
          <Card.Img variant="top" src={Gestion} />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Estos sistemas abarcan diversas áreas, como contabilidad,
                inventario, recursos humanos, ventas, compras y más.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Facilitan la toma de decisiones al proporcionar datos
                actualizados y reportes detallados sobre el desempeño del
                negocio.
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Permiten una mejor planificación y control, ya que centralizan
                la información y mejoran la comunicación entre departamentos.
              </li>
            </Card.Text>
            <Button variant="dark">Ver Más</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            border: "2px solid rgba(11, 11, 11, 0.42)",
          }}
          className="Card"
        >
          <Card.Img variant="top" src={Asesoramiento} />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Si estas estudiando desarrollo web y necesitas apoyo podes
                coordinar clases particulares vía meet o discord para aclar tus
                dudas
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Te asesoramos no solo con tus estudios, sino también a tomar la
                mejor desicion antes de elegir como será tu sitio web
              </li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", fontWeight: 600 }}>
              <li>
                Sistema de consulta para clarar todo tipo de dudas ya sea de tu
                futuro sitio web o repasar conceptos que no te queden claros en
                tus estudios
              </li>
            </Card.Text>
            <Button variant="dark">Ver Más</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
