import "bootstrap/dist/css/bootstrap.min.css";
import "./servicios.css";

function Servicios() {
  return (
    <div className="ContainerServicios">
      <button className="ButtonServicios">
        <span className="servicios">Servicios</span>
      </button>
      <section className="sectionContainerCardServicios">
        <div className="serviciosCardOne">
          <h3 className="H3Desarrollo">Desarrollo web</h3>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Hosting</b>
            </div>
            <p className="parrafoRectangule">
              Hosting Almacenamiento en servidores para alojar tu sitio web.
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Dominio</b>
            </div>
            <p className="parrafoRectangule">
              La dirección web que identifica tu sitio , por ejemplo:
              "www.example.com"
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Diseño Web</b>
            </div>
            <p className="parrafoRectangule">
              Creación y personalñizacion de la apariencia y funcionalidad del
              sitio
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Desarrollo de contenido</b>
            </div>
            <p className="parrafoRectangule">
              Creación de gestión de textos, imagenes y multimedia
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Seguridad</b>
            </div>
            <p className="parrafoRectangule">
              Implementación de medidas para proteger contra amenazas
              cibernéticas.
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">SEO</b>
            </div>
            <p className="parrafoRectangule">
              Mejora de visibilidad en los resultados de búsqueda.
            </p>
          </div>
        </div>

        {/* Sistemas Pos  */}

        <div className="serviciosCardTwo">
          <h3 className="H3Desarrollo">Software de Gestión</h3>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Puntos de ventas (POS)</b>
            </div>
            <p className="parrafoRectangule">
              Sistemas de software para gestionar transacciones de ventas en
              tiendas físicas
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Inventaríos</b>
            </div>
            <p className="parrafoRectangule">
              Seguimiento y gestión de existencias de productos
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Facturación</b>
            </div>
            <p className="parrafoRectangule">
              Creación y envio de facturas a clientes.
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Gestión de empleados</b>
            </div>
            <p className="parrafoRectangule">
              Control de horarios y tareas de los empleados
            </p>
          </div>
          <div className="ContenedorRectangule">
            <div className="Rectangule">
              <b className="TituloRectangule">Informes y analizis</b>
            </div>
            <p className="parrafoRectangule">
              Generación de informes sobre ventas, inventario y otros datos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
