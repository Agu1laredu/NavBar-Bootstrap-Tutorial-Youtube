import "./Contacto.css";

function Contacto() {
  return (
    <div className="ContainerContacto">
      <button className="ButtonContacto" id="ButtonContacto">
        <span className="contacto">Contacto</span>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="233"
        height="231"
        viewBox="0 0 233 231"
        fill="none"
        className="TwitchChartOne"
      >
        <path
          d="M209.5 0.25H23.5C10.6776 0.25 0.25 10.6776 0.25 23.5V163C0.25 175.822 10.6776 186.25 23.5 186.25H58.375V230.03L131.345 186.25H209.5C222.322 186.25 232.75 175.822 232.75 163V23.5C232.75 10.6776 222.322 0.25 209.5 0.25ZM209.5 163H124.905L81.625 188.97V163H23.5V23.5H209.5V163Z"
          fill="#5B245C"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="233"
        height="231"
        viewBox="0 0 233 231"
        fill="none"
        className="TwitchChartTwo"
      >
        <path
          d="M209.5 0.25H23.5C10.6776 0.25 0.25 10.6776 0.25 23.5V163C0.25 175.822 10.6776 186.25 23.5 186.25H58.375V230.03L131.345 186.25H209.5C222.322 186.25 232.75 175.822 232.75 163V23.5C232.75 10.6776 222.322 0.25 209.5 0.25ZM209.5 163H124.905L81.625 188.97V163H23.5V23.5H209.5V163Z"
          fill="#7294C2"
        />
      </svg>
      <div class="fila">
        <div class="col">
          <form
            action="mailto:Agu1laredu@Hotmail.com"
            method="post"
            enctype="text/plain"
          >
            <input type="text" id="nombre" placeholder="Tu Nombre" required />
            <input
              type="tel"
              id="telefono"
              placeholder="Tu Telefono"
              required
            />
            <input type="email" id="correo" placeholder="Tu correo" required />
            <input type="text" id="tema" placeholder="Tema" required />
            <textarea
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              required
            ></textarea>
            <button type="submit" className="ButtonMensaje">
              <span className="EnviarMensaje"> Enviar Mensaje</span>
              <span class="overlay"></span>
            </button>
          </form>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="279"
        height="219"
        viewBox="0 0 279 219"
        fill="none"
        className="SVGFlechaOne"
      >
        <path
          d="M-22.3852 82.98C-22.7484 88.186 -19.1164 93.0373 -13.2103 95.216L105.29 138.815L159.645 233.853C162.235 238.362 167.857 241.237 174 241.237L174.9 241.212C178.069 241.07 181.112 240.164 183.63 238.614C186.148 237.064 188.026 234.941 189.018 232.523L277.372 16.784C279.22 12.2493 277.735 7.24599 273.535 3.86399C269.334 0.48199 263.112 -0.670677 257.427 0.785989L-11.5521 71.656C-14.5676 72.4515 -17.2142 73.9575 -19.1466 75.9775C-21.079 77.9975 -22.2077 80.4378 -22.3852 82.98ZM237.609 32.6807L171.568 193.927L131.552 123.982C129.978 121.224 127.22 119.012 123.782 117.75L36.5493 85.6527L237.609 32.6807Z"
          fill="#7294C2"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="279"
        height="219"
        viewBox="0 0 279 219"
        fill="none"
        className="SVGFlechaTwo"
      >
        <path
          d="M-22.3852 82.98C-22.7484 88.186 -19.1164 93.0373 -13.2103 95.216L105.29 138.815L159.645 233.853C162.235 238.362 167.857 241.237 174 241.237L174.9 241.212C178.069 241.07 181.112 240.164 183.63 238.614C186.148 237.064 188.026 234.941 189.018 232.523L277.372 16.784C279.22 12.2493 277.735 7.24599 273.535 3.86399C269.334 0.48199 263.112 -0.670677 257.427 0.785989L-11.5521 71.656C-14.5676 72.4515 -17.2142 73.9575 -19.1466 75.9775C-21.079 77.9975 -22.2077 80.4378 -22.3852 82.98ZM237.609 32.6807L171.568 193.927L131.552 123.982C129.978 121.224 127.22 119.012 123.782 117.75L36.5493 85.6527L237.609 32.6807Z"
          fill="#5B245C"
        />
      </svg>
    </div>
  );
}

export default Contacto;
