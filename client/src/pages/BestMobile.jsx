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
  asset44,
  asset45,
  asset46,
  asset47,
  asset48,
  asset49,
  asset50,
} from "../assets";

export default function BestMobile() {
  return (
    <>
      <Swiper
        navigation={true}
        direction={"horizontal"}
        mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Mousewheel]}
        className="mySwiper  w-[98%]"
      >
        <SwiperSlide className="">
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset44}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48 bg-cover mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Samsung S22 5G</h3>
              <h3 className="font-semibold">from ₹35,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset45}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover  mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Realme 11Pro+ 5G</h3>
              <h3 className="font-semibold">from ₹22,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset46}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover   mx-auto mt-2"
            />
            <div className="text-center p-3">
              <h3>RedmiNote 12Pro</h3>
              <h3 className="font-semibold">from ₹19,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset47}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover  mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Vivo T2 Pro 5G</h3>
              <h3 className="font-semibold">from ₹28,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset48}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover  mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>InfixHot Note 30 5G</h3>
              <h3 className="font-semibold">from ₹21,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset49}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover  mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Samsung S21 FE 5G</h3>
              <h3 className="font-semibold">from ₹35,499*</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset50}
              alt=""
              className="w-28 h-32 md:w-40 md:h-48  bg-cover  mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Redmi 12</h3>
              <h3 className="font-semibold">from ₹17,999*</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
