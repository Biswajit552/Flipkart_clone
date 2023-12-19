import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel } from "swiper/modules";
import {
  asset17,
  asset18,
  asset19,
  asset20,
  asset21,
  asset22,
  asset23,
  asset24,
  asset25,
  item,
} from "../assets";
import MenuBar from "./MenuBar";
import { statuses } from "../utils/styles";

export default function Slider() {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {statuses &&
          statuses.map((data, i) => (
            <SwiperSlide className="">
              <MenuBar key={i} data={data} index={i} />
            </SwiperSlide>
          ))}

        {/* <SwiperSlide>
          <div className="bg-white p-2  text-center ">
            <img
              src={asset17}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover  mx-auto"
            />
            <h4 className="text-sm mt-2 font-semibold">Mobile & Tablets</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2  text-center">
            <img
              src={asset18}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Electronics</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2  text-center">
            <img
              src={asset19}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">TV & Appliances</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 text-center ">
            <img
              src={asset20}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Fashion</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 text-center ">
            <img
              src={asset21}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover  mx-auto"
            />
            <h4 className=" text-sm mt-2 font-semibold">Beauty</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 text-center ">
            <img
              src={asset22}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg- mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Home & Kitchen</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 text-center ">
            <img
              src={asset23}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Furniture</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2  text-center">
            <img
              src={asset24}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Flights</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2  text-center">
            <img
              src={asset25}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
            />
            <h4 className=" text-sm mt-2 font-semibold">Grocery</h4>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
