import React from "react";

const MenuBar = ({ data, index }) => {
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
      <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-serif font-semibold py-2 px-4 border border-blue-700 rounded">
        Buy
      </button>
    </div>
  );
};

export default MenuBar;
