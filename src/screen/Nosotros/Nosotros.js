import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DigitalLena from "../../assets/ImagenesCards/DigitalLena.png";
import "./Nosotros.css";

function Nosotros() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <h2>Nosotros</h2>
      <p className="Paraffos">
        En Digital Moon, nuestra pasión es llevar a las marcas más allá,
        impulsándolas hacia nuevas alturas en el mundo digital. Somos una
        agencia innovadora y comprometida, especializada en el desarrollo de
        soluciones digitales personalizadas que marcan la diferencia. Nuestro
        conjunto integral de servicios incluye la creación de landing pages
        cautivadoras, e-commerces dinámicos, sistemas POS eficientes y asesorías
        estratégicas que transforman negocios
      </p>
      <p className="Paraffos">
        Nuestro equipo de expertos, altamente calificados y apasionados, se
        dedica a brindar soluciones digitales excepcionales que impulsan el
        crecimiento y el éxito empresarial. Sabemos que cada marca es única y
        requiere un enfoque adaptado a sus necesidades específicas. Por eso, nos
        esforzamos en entender a nuestros clientes y sus objetivos para
        ofrecerles soluciones a medida que destacan en el competitivo mundo en
        línea.
      </p>
      <p className="Paraffos">
        En Digital Moon, nuestro lema es "Estamos listos para acompañarte en el
        siguiente paso." Creemos firmemente que el crecimiento continuo y la
        mejora constante son fundamentales para alcanzar el éxito. Con cada
        proyecto que emprendemos, buscamos superar las expectativas y establecer
        una relación sólida y duradera con nuestros clientes.
      </p>
      <p className="Paraffos">
        La luna, fuente de inspiración y misterio, refleja nuestra filosofía
        empresarial. Así como la luna se eleva en el cielo nocturno, Digital
        Moon eleva a las marcas hacia nuevas alturas en el vasto universo
        digital. Nos enorgullece ser parte del progreso y éxito de nuestros
        clientes y estamos comprometidos a ser su socio de confianza en cada
        paso del camino.
      </p>
      <p className="Paraffos">
        Si estás buscando una agencia que te brinde soluciones digitales
        excepcionales y un acompañamiento cercano en tu viaje hacia el éxito en
        línea, Digital Moon está aquí para ti. Permítenos llevar tu marca a
        nuevas alturas y juntos alcanzaremos la cima del éxito digital.
      </p>
      <h3>Nuestros Proyectos</h3>
      <Card className="CardContainerProyecto">
        <a
          href="https://digital-lena.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={DigitalLena}
            style={{
              borderBottom: "2px solid rgba(11, 11, 11, 0.42)",
            }}
          />
        </a>
        <Card.Body>
          <Card.Title>Digital Lena</Card.Title>
          <Card.Text>
            Sitio web para Community Manager y su marca personal
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      {/* <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card> */}
      <Footer />
    </div>
  );
}

export default Nosotros;
