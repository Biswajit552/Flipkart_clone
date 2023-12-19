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
  asset100,
  asset101,
  asset102,
  asset103,
  asset104,
  asset105,
  asset106,
  asset107,
  asset108,
  asset109,
  asset110,
  asset111,
  asset112,
  asset113,
  asset114,
  asset44,
  asset45,
  asset46,
  asset47,
  asset48,
  asset49,
  asset50,
  asset99,
} from "../assets";

export default function Topitem() {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
        navigation={true}
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
            slidesPerView: 6,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Mousewheel]}
        className="mySwiper  w-[98%]"
      >
        <SwiperSlide className="">
          <div className="bg-white px-3  border border-gray-300 ">
            <img
              src={asset99}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset100}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset101}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset102}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset103}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset104}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset105}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset106}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset107}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset108}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset109}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset110}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset111}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset112}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset113}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
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
              src={asset114}
              alt=""
              className="w-24 h-28 md:w-36 md:h-40 bg-cover mx-auto mt-2  "
            />
            <div className="text-center p-3">
              <h3>Samsung S22 5G</h3>
              <h3 className="font-semibold">from ₹35,499*</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
