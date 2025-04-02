import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import group1Automotive from "../../../assets/group1-automotive.png";
import wolt from "../../../assets/wolt.svg";
import saic from "../../../assets/saic.svg";
import merck from "../../../assets/merck.svg";
import lowes from "../../../assets/lowes.svg";

let clientLogos = [
  group1Automotive,
  wolt,
  merck,
  lowes,
  saic,
  saic,
  group1Automotive,
  wolt,
  merck,
  lowes,
  saic,
  saic,
];

export const OurBusinessClients = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={7}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      centeredSlidesBounds={true}
      pagination={{
        clickable: false,
      }}
      modules={[Autoplay]}
      className="mySwiper w-container h-24"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {clientLogos.map((logo, index) => (
        <SwiperSlide>
          <img src={logo} key={`logo_${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
