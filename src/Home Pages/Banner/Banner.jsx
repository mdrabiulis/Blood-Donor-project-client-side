// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img from "/public/Banner.png";
import img2 from "/public/Banner2.png";
import img3 from "/public/Banner3.png";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[1950px] h-[600px] bg-zinc-100" src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[1950px] h-[600px] bg-zinc-100" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[1950px] h-[600px] bg-zinc-100" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
