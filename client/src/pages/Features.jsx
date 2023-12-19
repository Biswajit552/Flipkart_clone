import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Mousewheel } from "swiper/modules";

import {
  asset74,
  asset76,
  asset78,
  asset80,
  asset82,
  asset84,
  asset86,
  asset88,
  asset90,
} from "../assets";

export default function Features() {
  return (
    <>
      <Swiper
        navigation={true}
        direction={"horizontal"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Mousewheel]}
        className="mySwiper  w-[98%]"
      >
        <SwiperSlide className="">
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset74}
              alt=""
              className="w-full md:w-full bg-cover mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset76}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset78}
              alt=""
              className="w-full md:w-full  bg-cover   mx-auto mt-2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset80}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset82}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset84}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset86}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset88}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset90}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset90}
              alt=""
              className="w-full md:w-full  bg-cover  mx-auto mt-2  "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
