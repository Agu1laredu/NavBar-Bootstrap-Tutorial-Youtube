import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contacto() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <section id="contacto" class="contacto">
        <div class="contenido-seccion">
          <h2>CONTACTO</h2>
          <div class="fila">
            <div class="col">
              <form
                action="mailto:Agu1laredu@Hotmail.com"
                method="post"
                enctype="text/plain"
              >
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tú Nombre"
                  required
                />
                <input
                  type="tel"
                  id="telefono"
                  placeholder="Número telefónico"
                  required
                />
                <input
                  type="email"
                  id="correo"
                  placeholder="Dirección de correo"
                  required
                />
                <input type="text" id="tema" placeholder="Tema" required />
                <textarea
                  id="mensaje"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  required
                ></textarea>
                <button type="submit">
                  Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                  <span class="overlay"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contacto;
