import React from "react";
/* import { Swiper, SwiperSlide } from "swiper/react"; */
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { servicesData, /* servicesSwiperSettings */ } from "./constants";

SwiperCore.use([Autoplay, Navigation]);

const Services = () => {
  return (
    <section className="services" id="Services">
      <h2>The Company core businesses includes</h2>
      <div className="services__wrapper">
        { servicesData.map(item =>
          <React.Fragment key={ item.id }>
            <p>{ item.value }</p>
          </React.Fragment>
        ) }

    {/*  <Swiper { ...servicesSwiperSettings }>
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
      </Swiper> */}
      </div>
    </section>
  )
}

export default Services
