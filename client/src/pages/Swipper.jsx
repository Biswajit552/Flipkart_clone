import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  asset26,
  asset28,
  asset30,
  asset32,
  asset34,
  asset36,
  asset38,
} from "../assets";

export default function Swipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <img src={asset26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset28} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset30} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset32} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset34} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset36} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asset38} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
