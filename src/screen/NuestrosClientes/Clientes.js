import "bootstrap/dist/css/bootstrap.min.css";
import SwiperSlider from "./Components/Swiper";
import "./Clients.css";

function Nosotros() {
  return (
    <div className="ContainerClients">
      <button className="ButtonClients">
        <span className="clients">Ellos confiaron en nosotros</span>
      </button>
      <SwiperSlider />
    </div>
  );
}

export default Nosotros;
