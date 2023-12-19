import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const topoffers = products?.filter(
    (item) => item.product_category === "topoffers"
  );
  const mobile_tablets = products?.filter(
    (item) => item.product_category === "mobile_tablets"
  );
  const electronics = products?.filter(
    (item) => item.product_category === "electronics"
  );
  const tv_appliances = products?.filter(
    (item) => item.product_category === "tv_appliances"
  );
  const fashion = products?.filter(
    (item) => item.product_category === "fashion"
  );
  const beauty = products?.filter((item) => item.product_category === "beauty");
  const home_kitchen = products?.filter(
    (item) => item.product_category === "home_kitchen"
  );
  const furniture = products?.filter(
    (item) => item.product_category === "furniture"
  );
  const flights = products?.filter(
    (item) => item.product_category === "flights"
  );
  const grocery = products?.filter(
    (item) => item.product_category === "grocery"
  );

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  });
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className=" grid w-full grid-cols-1 md:grid-cols-2 gap4 h-full">
        <div className=" flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "topoffers",
                  "mobile_tablets",
                  "electronics",
                  "tv_appliances",
                  "fashion",
                  "beauty",
                  "home_kitchen",
                  "furniture",
                  "flights",
                  "grocery",
                ],
                datasets: [
                  {
                    label: "Category wise Count",
                    backgroundColor: "#f87979",
                    data: [
                      topoffers?.length,
                      mobile_tablets?.length,
                      electronics?.length,
                      tv_appliances?.length,
                      fashion?.length,
                      beauty?.length,
                      home_kitchen?.length,
                      furniture?.length,
                      flights?.length,
                      grocery?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className=" w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#51FF00",
                      "#00B6FF",
                      "#008BFF",
                      "#FFD100",
                      "#FF00FB",
                    ],
                    data: [100, 80, 20, 34, 54],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
