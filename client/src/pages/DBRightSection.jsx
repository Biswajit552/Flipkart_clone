import React from "react";
// import {DBHeader, DBHome, DBItems, DBNewItem, DBOrders, DBUsers} from '../components'
import { Route, Routes } from "react-router-dom";
import DBNewItem from "./DBNewItem";
import DBItems from "./DBItems";
import DBHome from "./DBHome";
import DBOrders from "./DBOrders";
import CreateListing from "./CreateListing";

const DBRightSection = () => {
  return (
    <div className="flex flex-col px-8 py-8 flex-1 h-full">
      <div className=" flex flex-col flex-1 overflow-y-scroll scrollbar-none ">
        <Routes>
          <Route path="/home" element={<DBHome />} />
          <Route path="/orders" element={<DBOrders />} />
          <Route path="/items" element={<DBItems />} />
          <Route path="/newItem" element={<DBNewItem />} />
          <Route path="/users" element={<CreateListing />} />
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
