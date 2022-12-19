import assistance from "../../assets/images/services/assistance.jpg";
import contractors from "../../assets/images/services/contractors.jpg";
import contructersWorks from "../../assets/images/services/contructers-works.jpg";
import designers from "../../assets/images/services/designers.jpg";
import furnitures from "../../assets/images/services/furnitures.jpg";

export const servicesData = [
  {
    id: "1",
    value: "Consultation and assistance in the loose furniture selection",
    image: assistance
  },
  {
    id: "2",
    value: "Selection of contractors and their us in finishing materials selection",
    image: contractors
  },
  {
    id: "3",
    value: "Consultations during construction works, monitoring the quality of interior works",
    image: contructersWorks
  },
  {
    id: "4",
    value: "Selection of contractors and their us in finishing materials selection",
    image: designers
  },
  {
    id: "5",
    value: "Consultation and assistance in interiors set-up (tableware, bed linen, accessories, interior item",
    image: furnitures
  },
]
export const servicesSwiperSettings = {
  slidesPerView: 3,
  spaceBetween: 10,
  mousewheel: true,
  navigation: true,
  effect: "cube",
  keyboard: true,
  autoplay: { delay: 7000, pauseOnMouseEnter: true, disableOnInteraction: false },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    },
  }
};
