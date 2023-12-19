import React from "react";

const Demo = ({ data, index }) => {
  return (
    <div className="bg-white px-3  border border-gray-300 ">
      <img
        src={data.imageURL}
        alt=""
        className="w-28 h-32 md:w-44 md:h-48 bg-cover mx-auto mt-2  "
      />
      <div className="text-center p-3 ">
        <h3 className="font-serif font-medium bg-slate-100 rounded-md">
          {data.product_name}
        </h3>
        <h3 className="font-semibold">from ₹{data.product_price}</h3>
      </div>
    </div>
  );
};

export default Demo;
