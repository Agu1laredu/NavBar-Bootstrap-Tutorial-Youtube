import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "react-bootstrap/Card";
import LandingPage from "../src/assets/ImagenesCards/1.png";
import Ecommerce from "../src/assets/ImagenesCards/2.png";
import Gestion from "../src/assets/ImagenesCards/3.png";
import Asesoramiento from "../src/assets/ImagenesCards/4.png";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { MyVerticallyCenteredModal } from "./ModalComponent";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: [],
  });

  const handleShowModal = (title, content) => {
    setModalContent({ title, content });
    setModalShow(true);
  };

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
            <Button
              variant="dark"
              onClick={() =>
                handleShowModal("Lading Page Servicio", [
                  "Mantén el diseño limpio y atractivo, evitando distracciones innecesarias. Un diseño simple y enfocado en el contenido clave ayudará a que los usuarios se concentren en la oferta principal.",
                  "Utiliza imágenes y elementos visuales relevantes para apoyar el mensaje y mejorar la experiencia del usuario. La estética y el uso de colores coherentes pueden influir en la percepción de la marca.",
                  "La información presentada en la Landing Page debe ser clara, concisa y orientada a las necesidades de tu audiencia. Resalta los beneficios y características más relevantes de tu producto o servicio.",
                  "Utiliza testimonios, reseñas o pruebas sociales para generar confianza en tu oferta. La credibilidad es crucial para que los usuarios se sientan seguros de tomar la acción que deseas.",
                  "Considera el uso de elementos multimedia, como videos explicativos o demostrativos, para aumentar la participación y retención de la información.",
                  "Se coordinara una reunion por meet para evaluar los requisitos en tiempo y forma para llegar a un acuerdo con el presupuesto valuado en $ argentinos, una vez ambas partes esten de acuerdo se comenzara a trabajar ",
                ])
              }
            >
              Ver Más
            </Button>
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
            <Button
              variant="dark"
              onClick={() =>
                handleShowModal("E-commerce Servicio", [
                  "Los pagos se realizan a través de diversas opciones, como tarjetas de crédito, transferencias bancarias o servicios de pago en línea.",
                  "Es una plataforma que permite a los negocios alcanzar una audiencia global y ofrecer sus productos las 24 horas del día, los 7 días de la semana.",
                  "Los clientes pueden explorar catálogos en línea, agregar productos al carrito de compras y realizar transacciones de forma segura.",
                  "Una navegación intuitiva que permita a los usuarios encontrar fácilmente los productos y categorías.",
                  "Se coordinara una reunion por meet para evaluar los requisitos en tiempo y forma para llegar a un acuerdo con el presupuesto valuado en $ argentinos, una vez ambas partes esten de acuerdo se comenzara a trabajar ",
                ])
              }
            >
              Ver Más
            </Button>
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
            <Button
              variant="dark"
              onClick={() =>
                handleShowModal("sistemas de Gestión Servicio", [
                  "Identifica los indicadores clave de rendimiento (KPIs) más importantes para tu negocio y para el funcionamiento del sistema POS. Estos KPIs pueden variar según el tipo de negocio",
                  "Un dashboard efectivo debe presentar la información de manera clara y concisa para que los usuarios puedan entenderla rápidamente. Utiliza gráficos y tablas adecuados para visualizar los datos de forma significativa y fácil de interpretar. Evita el uso de colores y elementos visuales excesivos que puedan distraer o dificultar la comprensión de la información.",
                  " Un sistema POS debe proporcionar información en tiempo real para tomar decisiones rápidas y efectivas. Asegúrate de que el dashboard se actualice automáticamente y refleje los datos más recientes, lo que permitirá a los usuarios supervisar el rendimiento en tiempo real y actuar ante situaciones inmediatas, como escasez de inventario o baja demanda en un producto específico.",
                  "Se coordinara una reunion por meet para evaluar los requisitos en tiempo y forma para llegar a un acuerdo con el presupuesto valuado en $ argentinos, una vez ambas partes esten de acuerdo se comenzara a trabajar ",
                ])
              }
            >
              Ver Más
            </Button>
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
            <Button
              variant="dark"
              onClick={() =>
                handleShowModal("Asesoramiento Servicio", [
                  "Clases particulares sobre HTML, CSS, JAVASCRIPT",
                  "Las clases son de una hora corrida sin pausas donde te ayudaremos a entender los conceptos que necesites para tu mayor comprensión de los temas",
                  "No somos un Bootcamp , solo brindamos clases de apoyo ",
                  "También entra en esta categoria las asesorias para una mejor toma de descicion a la hora de crear tu pagina web , rendimiento, funcionalidades y las mejores tomas de descicion a la hora de crears",
                  "En este caso se evalua el nivel de asesoria para su presupuesto valuado en $ argentinos , una vez ambas partes esten de acuerdo se comenzara a trabajar ",
                  "Clases sobre desarrollo web estatico (HTML y CSS):  $ 2500 ",
                  "Clases sobre Javascript  :  $ 3500 ",
                  "Asesorias sobre tu pagina web para tu proyecto ( sea donde sea que estes estudiando): $ 2000",
                ])
              }
            >
              Ver Más
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
}

export default Home;
