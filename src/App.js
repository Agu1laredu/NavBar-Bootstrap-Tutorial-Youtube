/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import emailjs from "emailjs-com";
import Logo from "./assets/3.png";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ImagenUno from "./assets/ImagenesCards/1.png";
import ImagenDos from "./assets/ImagenesCards/2.png";
import ImagenTres from "./assets/ImagenesCards/3.png";
import ImagenCuatro from "./assets/ImagenesCards/4.png";
import ImagenCinco from "./assets/ImagenesCards/5.png";

import "./App.css";

function Home() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const serviceID = "service_mgdgsoj";
  const templateID = "template_8rgx1f9";
  const userID = "VBdwjP8cDYlfZzyr_"; // Reemplaza con tu User ID de EmailJS

  const sendEmail = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const tema = document.getElementById("tema").value;
    const mensaje = document.getElementById("mensaje").value;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          to: "Agu1laredu@hotmail.com", // Cambia con el destinatario real
          from: correo,
          name: nombre,
          telefono: telefono,
          tema: tema,
          message: mensaje,
        },
        userID
      )
      .then(function (response) {
        console.log("Correo enviado:", response);
        setShowConfirmation(true); // Mostrar el mensaje de confirmación
      })
      .catch(function (error) {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <div className="ContainerMax">
      <div className="App">
        <Container className="Containers">
          <h2 alt="Logotipo" className="Logo" id="MenuLogo">
            DIGITAL MOON
          </h2>
        </Container>

        <Container className="Container">
          <Navbar.Brand>
            <Link to={`/`}>
              <img src={Logo} alt="Logotipo" className="Logo" id="MenuInicio" />
            </Link>
          </Navbar.Brand>
        </Container>
      </div>
      <section className="Section1">
        <h1>Desarrollo Web personalizado y a tu medida</h1>
        <button className="Button">
          <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
            <span className="Span" id="MenuInicio">
              Presupuesto
            </span>
          </a>
        </button>
      </section>
      <section className="Section2" id="SobreNosotros">
        <button className="Button">
          <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
            <span className="Span" id="MenuInicio">
              Sobre Nosotros
            </span>
          </a>
        </button>
        <p className="Parrafo">
          En Digital Moon, nuestra pasión es llevar a las marcas más allá,
          impulsándolas hacia nuevas alturas en el mundo digital. Somos una
          agencia innovadora y comprometida, especializada en el desarrollo de
          soluciones digitales personalizadas que marcan la diferencia. Nuestro
          conjunto integral de servicios incluye la creación de landing pages
          cautivadoras, e-commerces dinámicos, sistemas POS eficientes y
          asesorías estratégicas que transforman negocios.
        </p>
      </section>
      <section className="Section3" id="Desarrolloweb">
        <button className="Button">
          <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
            <span className="Span" id="MenuInicio">
              Ellos confiaron
            </span>
          </a>
        </button>

        <div className="divCards">
          <Card className="Cards">
            <Card.Img variant="top" src={ImagenUno} />
            <Card.Body></Card.Body>
          </Card>
          <Card className="Cards">
            <Card.Img variant="top" src={ImagenDos} />
            <Card.Body></Card.Body>
          </Card>
          <Card className="Cards">
            <Card.Img variant="top" src={ImagenTres} />
            <Card.Body></Card.Body>
          </Card>

          <Card className="Cards">
            <Card.Img variant="top" src={ImagenCuatro} />
            <Card.Body></Card.Body>
          </Card>
          <Card className="Cards">
            <Card.Img variant="top" src={ImagenCinco} id="Cinco" />
            <Card.Body></Card.Body>
          </Card>
        </div>
      </section>
      <section className="Section4">
        <button className="Button">
          <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
            <span className="Span" id="MenuInicio">
              Servicios
            </span>
          </a>
        </button>

        <div className="divCardss" id="Servicios">
          <div className="Cardss">
            <Card.Body>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>HOSTING</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Almacenamiento en servidores para alojar tu sitio web.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>DOMINIO</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                La dirección web que identifica tu sitio (por ejemplo,
                www.ejemplo.com).
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>DISEÑO WEB</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Creación y personalización de la apariencia y funcionalidad del
                sitio.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>DESARROLLO DE CONTENIDO</p>
                </div>
              </Card.Text>
              <Card.Text>
                <span className="ParrafoCard">
                  Creación y gestión de textos, imágenes y multimedia.
                </span>
                <div className="ServiciosDiv">
                  <p>SEGURIDAD</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Implementación de medidas para proteger contra amenazas
                cibernéticas.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>SEO</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Mejora de la visibilidad en los resultados de búsqueda.
              </span>
            </Card.Body>
          </div>
          <div className="Cardss" id="SistemaPOS">
            <Card.Body>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>SISTEMA POS</p>
                </div>
              </Card.Text>
              <span className="ParrafoCard">
                Sistema de software para gestionar transacciones y ventas en
                tiendas físicas.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>INVENTARIOS</p>
                </div>
              </Card.Text>
              <span className="ParrafoCard">
                Seguimiento y gestión de existencias de productos.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>FACTURACIÓN</p>
                </div>
              </Card.Text>
              <span className="ParrafoCard">
                Creación y envío de facturas a clientes.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>GESTIÓN DE EMPLEADOS</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Control de horarios y tareas de los empleados.
              </span>
              <Card.Text>
                <div className="ServiciosDiv">
                  <p>INFORMES Y ANÁLISIS</p>
                </div>
              </Card.Text>{" "}
              <span className="ParrafoCard">
                Generación de informes sobre ventas, inventario y otros datos.
              </span>
            </Card.Body>
          </div>
        </div>
      </section>
      <section>
        <div className="fila">
          <button className="Button" id="ButtonContacto">
            <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
              <span className="Span" id="MenuInicio">
                Contacto
              </span>
            </a>
          </button>
          <div className="col" id="Contacto">
            <form
              id="form"
              onSubmit={sendEmail}
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                required
              />
              <input
                name="telefono"
                type="tel"
                id="telefono"
                placeholder="Número de telefono"
                required
              />
              <input
                type="email"
                name="email"
                id="correo"
                placeholder="Correo electronico "
                required
              />
              <input
                type="text"
                name="tema"
                id="tema"
                placeholder="Tema"
                required
              />
              <textarea
                placeholder="Mensaje"
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="10"
                required
              ></textarea>
              <button
                type="submit"
                id="button"
                value="Send Email"
                className="ButtonMensaje"
              >
                <span className="EnviarMensaje"> Enviar Mensaje</span>
                <span className="overlay"></span>
              </button>
              {showConfirmation && (
                <div className="MensajeEnviado">
                  <p className="ModalMensaje">
                    Mensaje enviado. ¡Gracias por contactarnos!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-menus">
            <div className="footer-content-container">
              <div className="contenedorP" style={{ textAlign: "center" }}>
                <p href="" className="menu-item-footer">
                  <a
                    href="#MenuInicio"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    Menu
                  </a>
                </p>
                <p href="" className="menu-item-footer">
                  <a
                    href="#Servicios"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    Servicios
                  </a>
                </p>
              </div>

              <div className="contenedorP" style={{ textAlign: "center" }}>
                <p href="" className="menu-item-footer">
                  <a
                    href="#SobreNosotros"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    Sobre nosotros
                  </a>
                </p>
                <p href="" className="menu-item-footer">
                  <a
                    href="#Desarrolloweb"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    Desarrollo web
                  </a>
                </p>
              </div>

              <div className="contenedorP" style={{ textAlign: "center" }}>
                <p href="" className="menu-item-footer">
                  <a
                    href="#Contacto"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    Contacto
                  </a>
                </p>
                <p href="" className="menu-item-footer">
                  <a
                    href="#SistemaPOS"
                    style={{ textDecoration: "none", color: "#FFF" }}
                  >
                    {" "}
                    Software de gestión
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="ContenedorFooterFinis">
        <div className="footer-content-containerDos">
          <button className="FooterButton">
            <a href="#ButtonContacto" style={{ textDecoration: "none" }}>
              <span className="Span" id="MenuInicio">
                Siguenos
              </span>
            </a>
          </button>
          <img className="LogoFooter" src={Logo} />
          <div className="social-container">
            <p href="" className="social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
              >
                <path
                  d="M11.4194 16.4931C14.1887 16.4931 16.4336 14.2482 16.4336 11.479C16.4336 8.70972 14.1887 6.4648 11.4194 6.4648C8.65019 6.4648 6.40527 8.70972 6.40527 11.479C6.40527 14.2482 8.65019 16.4931 11.4194 16.4931Z"
                  fill="#7294C2"
                />
                <path
                  d="M21.1682 20.2927V48.1112H29.8055V34.3544C29.8055 30.7244 30.4884 27.209 34.9892 27.209C39.4282 27.209 39.4832 31.3592 39.4832 34.5835V48.1135H48.1251V32.8579C48.1251 25.3642 46.5117 19.6052 37.753 19.6052C33.5478 19.6052 30.729 21.9129 29.5763 24.0969H29.4594V20.2927H21.1682ZM7.09277 20.2927H15.7438V48.1112H7.09277V20.2927Z"
                  fill="#7294C2"
                />
              </svg>
            </p>

            <p href="" className="social-link">
              <a
                href="https://www.instagram.com/digitalmoon.software/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <path
                    d="M49.7489 19.7244C49.725 17.9256 49.3882 16.1447 48.7538 14.4614C48.2036 13.0415 47.3633 11.752 46.2866 10.6752C45.2098 9.59848 43.9203 8.75818 42.5004 8.20801C40.8387 7.58423 39.0832 7.24694 37.3087 7.2105C35.0239 7.10838 34.2996 7.07988 28.4998 7.07988C22.7001 7.07988 21.9567 7.07988 19.6886 7.2105C17.9148 7.24721 16.1601 7.58449 14.4992 8.20801C13.0791 8.75779 11.7894 9.59796 10.7126 10.6748C9.63576 11.7516 8.79559 13.0413 8.2458 14.4614C7.62077 16.1218 7.28422 17.8769 7.25068 19.6508C7.14855 21.9379 7.11768 22.6623 7.11768 28.462C7.11768 34.2618 7.11768 35.0028 7.25068 37.2733C7.2863 39.0498 7.62118 40.8025 8.2458 42.4674C8.79651 43.8871 9.6373 45.1763 10.7145 46.2526C11.7916 47.3289 13.0815 48.1688 14.5016 48.7184C16.158 49.3672 17.9129 49.7287 19.6909 49.7871C21.9781 49.8893 22.7024 49.9201 28.5022 49.9201C34.3019 49.9201 35.0453 49.9201 37.3134 49.7871C39.0879 49.7522 40.8435 49.4157 42.5052 48.792C43.9247 48.2412 45.2139 47.4007 46.2906 46.324C47.3672 45.2473 48.2077 43.9581 48.7586 42.5386C49.3832 40.8761 49.718 39.1234 49.7537 37.3445C49.8558 35.0598 49.8867 34.3354 49.8867 28.5333C49.8819 22.7335 49.8819 21.9973 49.7489 19.7244ZM28.4856 39.4298C22.4198 39.4298 17.5059 34.5159 17.5059 28.4501C17.5059 22.3844 22.4198 17.4705 28.4856 17.4705C31.3975 17.4705 34.1902 18.6273 36.2493 20.6864C38.3084 22.7454 39.4652 25.5382 39.4652 28.4501C39.4652 31.3621 38.3084 34.1548 36.2493 36.2139C34.1902 38.273 31.3975 39.4298 28.4856 39.4298ZM39.9022 19.6246C39.5659 19.6249 39.2328 19.5589 38.922 19.4304C38.6113 19.3018 38.3289 19.1133 38.0911 18.8754C37.8533 18.6376 37.6647 18.3553 37.5362 18.0445C37.4076 17.7337 37.3416 17.4007 37.3419 17.0644C37.3419 16.7283 37.4081 16.3955 37.5367 16.0851C37.6653 15.7746 37.8538 15.4925 38.0915 15.2548C38.3291 15.0172 38.6112 14.8287 38.9217 14.7001C39.2322 14.5715 39.5649 14.5053 39.901 14.5053C40.2371 14.5053 40.5698 14.5715 40.8803 14.7001C41.1908 14.8287 41.4729 15.0172 41.7105 15.2548C41.9482 15.4925 42.1367 15.7746 42.2653 16.0851C42.3939 16.3955 42.4601 16.7283 42.4601 17.0644C42.4601 18.4799 41.3153 19.6246 39.9022 19.6246Z"
                    fill="#7294C2"
                  />
                  <path
                    d="M28.4856 35.5822C32.4246 35.5822 35.6178 32.3891 35.6178 28.4501C35.6178 24.5112 32.4246 21.318 28.4856 21.318C24.5467 21.318 21.3535 24.5112 21.3535 28.4501C21.3535 32.3891 24.5467 35.5822 28.4856 35.5822Z"
                    fill="#7294C2"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
