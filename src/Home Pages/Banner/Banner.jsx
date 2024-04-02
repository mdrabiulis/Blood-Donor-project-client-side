// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img from "../../assets/Banner.jpg";
import img1 from "../../assets/Banner1.jpg";
import img2 from "../../assets/Banner2.jpg";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
          <img className="w-[1600px] h-[900px]" src={img} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="w-[850px] " src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[850px] " src={img2} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Banner;
