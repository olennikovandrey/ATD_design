import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { swiperData, servicesSwiperSettings } from "./constants";

SwiperCore.use([Autoplay, Navigation]);

const Services = () => {
  return (
    <section className="services" id="Services">
      <h2>The Company core businesses includes</h2>
      <div className="services__wrapper">
      <Swiper { ...servicesSwiperSettings }>
        {
          swiperData.map(service =>
            <SwiperSlide key={ service.id }>
              <div className="services__wrapper-item">
                <div className="services__wrapper-item-img">
                  <img src={ service.image } alt={ service.value }/>
                </div>
                <p>{ service.value }</p>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Services
