import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home";
import HomeSLider from "../pages/HomeSlider";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";

const Main = () => {
  const products = useSelector((state) => state.products);
  //   const isCart = useSelector((state) => state.isCart);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  //   //hotelcart
  //   const hotels = useSelector((state) => state.hotels);
  //   const isbook = useSelector((state) => state.isbook);

  //   useEffect(()=>{
  //     if(!hotels){
  //       getAllHotels().then((data)=>{
  //         dispatch(setAllhotels(data));
  //       });
  //     }
  //   },[])

  return (
    // <main className=" w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
    //   <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
    //     <Home />
    //     <HomeSLider />
    //     {/* <FilterSection/> */}
    //   </div>
    //   {/* {isCart && <Cart />}
    //   {isbook && <HotelCart />} */}
    // </main>
    <main>
      <Home />
    </main>
  );
};

export default Main;
