import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import Swipper from "./Swipper";
import {
  asset40,
  asset51,
  asset54,
  asset56,
  asset58,
  asset94,
  asset96,
  asset98,
} from "../assets";
import Slider from "./Slider";
import BestMobile from "./BestMobile";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Topitem from "./Topitem";
import Features from "./Features";
import HSlider from "./HSlider";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import FilterSection from "./FilterSection";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 cursor-pointer ">
      <div className="bg-white items-center mx-auto md:px-14 px-2 w-[99%] mt-1  ">
        <FilterSection />
      </div>

      <div className="w-[98%] mx-auto">
        <Swipper />
      </div>

      <div className="w-[98%] mx-auto">
        <img src={asset40} alt="" />
      </div>
      <div className="bg-white gap-2 w-[98%] mx-auto">
        <div className="flex justify-between p-2">
          <h2 className="text-xl font-sans  font-semibold">
            Our Best Price Products
          </h2>
          <PiArrowCircleRightFill className=" text-blue-700 text-3xl " />
        </div>
        <HSlider />
      </div>
      <div className="flex gap-2 w-[98%] mx-auto">
        <div className="lg:w-[85%] w-[100%] bg-white">
          <div className="flex justify-between p-2">
            <h2 className="text-xl font-sans  font-semibold">Best Mobile</h2>
            <PiArrowCircleRightFill className=" text-blue-700 text-3xl " />
          </div>
          <BestMobile />
        </div>
        <div className="w-[20%] hidden md:block ">
          <img src={asset51} alt="" className="w-56" />
        </div>
      </div>

      <div className=" flex gap-2 w-[98%] overflow-hidden mx-auto">
        <img src={asset54} alt="" className="w-[33%]" />
        <img src={asset56} alt="" className="w-[33%]" />
        <img src={asset58} alt="" className="w-[33%]" />
      </div>
      <div className="w-[98%] bg-white mx-auto">
        <div className="flex justify-between p-2">
          <h2 className="text-xl font-sans  font-semibold">Top Deals</h2>
          <PiArrowCircleRightFill className=" text-blue-700 text-3xl " />
        </div>
        <Topitem />
      </div>
      <div className=" flex gap-2 w-[98%] overflow-hidden mx-auto">
        <img src={asset94} alt="" className="w-[33%]" />
        <img src={asset96} alt="" className="w-[33%]" />
        <img src={asset98} alt="" className="w-[33%]" />
      </div>
      <div className=" bg-white">
        <div className="flex justify-between p-2">
          <h2 className="text-xl font-sans  font-semibold">Best Mobile</h2>
          <PiArrowCircleRightFill className=" text-blue-700 text-3xl " />
        </div>
        <Features />
      </div>
    </div>
  );
};

export default Home;
