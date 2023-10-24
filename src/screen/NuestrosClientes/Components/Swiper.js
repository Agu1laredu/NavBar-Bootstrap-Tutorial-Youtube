import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import ImagenUno from "../../../assets/ImagenesCards/1.png";
import ImagenDos from "../../../assets/ImagenesCards/2.png";
import ImagenTres from "../../../assets/ImagenesCards/3.png";
import ImagenCuatro from "../../../assets/ImagenesCards/4.png";
import ImagenCinco from "../../../assets/ImagenesCards/5.png";

function App() {
  return (
    <div className="containerSwiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="Swiper-Container">
            <img
              src={ImagenUno}
              alt="slide_image"
              className="ImagenSwiper"
              id="digital"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Swiper-Container">
            <img src={ImagenDos} alt="slide_image" className="ImagenSwiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Swiper-Container">
            <img src={ImagenTres} alt="slide_image" className="ImagenSwiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Swiper-Container">
            <img
              src={ImagenCuatro}
              alt="slide_image"
              className="ImagenSwiper"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Swiper-Container">
            <img src={ImagenCinco} alt="slide_image" className="ImagenSwiper" />
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
