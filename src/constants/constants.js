export const servicesData = [
  {
    id: "1",
    value: "Consultation and assistance in the loose furniture selection"
  },
  {
    id: "2",
    value: "Selection of designers and consultations on the development of the design projects"
  },
  {
    id: "3",
    value: "Consultations during construction works, monitoring the quality of interior works"
  },
  {
    id: "4",
    value: "Selection of contractors and their use in finishing materials selection"
  },
  {
    id: "5",
    value: "Consultation and assistance in interiors set-up (tableware, bed linen, accessories, interior items)"
  },
];

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
