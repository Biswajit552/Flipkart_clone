import React from "react";
// import  MaterialTable from "material-table" ;
// import { createTheme, ThemeProvider } from '@mui/material';
import { HiCurrencyRupee } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProducts, getAllProducts } from "../api";
import DataTable from "./DataTable";
import { alertNull, alertSuccess } from "../context/actions/alertActions";
import { setAllProducts } from "../context/actions/productActions";

const DBItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
                alt=""
              />
            ),
          },
          {
            title: "Name",
            field: "product_name",
          },
          {
            title: "Category",
            field: "product_category",
          },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className="text-2xl font-semibold text-textColor flex items-center ">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        // actions={[
        //   {
        //     icon: "edit",
        //     toolbar: "Edit Data",
        //     onclick: (event, rowData) => {
        //       console.log("click edit");
        //       alert("You want to edit" + rowData.productId);
        //     },
        //   },
        //   {
        //     icon: "delete",
        //     toolbar: "Delete Data",
        //     onclick: (event, rowData) => {
        //       console.log("click edit");
        //       alert("You want to delete" + rowData.productId);
        //     },
        //   },
        // ]}
        actions={[
          (rowData) => ({
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (event, rowData) => {
              alert("hii" + rowData.productId);
            },
          }),
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (event, rowData) => {
              if (
                window.confirm("Are  you sure, you want to perform this action")
              ) {
                deleteAProducts(rowData.productId).then((res) => {
                  dispatch(alertSuccess("Product Deleted"));
                  setInterval(() => {
                    dispatch(alertNull());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          }),
        ]}
      />
    </div>
  );
};

export default DBItems;
