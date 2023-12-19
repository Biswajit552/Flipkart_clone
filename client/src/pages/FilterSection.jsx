import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { statuses } from "../utils/styles";
import Demo from "./Demo";
import MenuBar from "./MenuBar";
const FilterSection = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);
  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full pt-6 flex items-center justify-center gap-2 py-8 bg-white">
        {statuses &&
          statuses.map((data, i) => {
            return (
              <FilterCard
                data={data}
                category={category}
                setCategory={setCategory}
                index={i}
              />
            );
          })}
      </div>
      <div className=" w-full flex items-center flex-wrap gap-2">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <MenuBar key={i} data={data} index={i} />)}
      </div>
    </motion.div>
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      onClick={() => setCategory(data.category)}
      className={` group w-28 min-w-[128px] cursor-pointer rounded-lg
        ${category === data.category ? "bg-slate-400" : "bg-primary"}
        shadow-md flex flex-col items-center justify-center gap-2`}
    >
      {/* <div
        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center
             group-hover:bg-primary ${
               category === data.category ? "bg-primary" : "bg-red-500"
             }`}
      >
        <IoFastFood />
      </div>
      <p
        className={`text-xl font-semibold ${
          category === data.category ? "text-primary" : "text-textColor"
        } group-hover:text-primary`}
      >
        {data.title}
      </p> */}
      <div className="bg-white p-2 text-center">
        <img
          src={data.img}
          alt=""
          className="md:w-20 md:h-20 w-16 h-16 rounded-full bg-cover mx-auto "
        />
        <h4 className=" text-sm mt-2 font-semibold">{data.title}</h4>
      </div>
    </motion.div>
  );
};

export default FilterSection;
