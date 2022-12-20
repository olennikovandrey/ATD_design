import React from "react";
/* import { Swiper, SwiperSlide } from "swiper/react"; */
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { servicesData, /* servicesSwiperSettings */ } from "../../constants/constants";

SwiperCore.use([Autoplay, Navigation]);

const Services = () => {
  return (
    <section className="services" id="Services">
      <h2>The Company core businesses include</h2>
      { servicesData.map(item =>
        <React.Fragment key={ item.id }>
          <p>{ item.value }</p>
        </React.Fragment>
      ) }
    </section>
  )
}

export default Services
