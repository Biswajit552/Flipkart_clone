import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, validateUserJWTToken } from "./api";
import { setUserDetails } from "./context/actions/userActions";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Home from "./pages/Home";
import { setAllProducts } from "./context/actions/productActions";

const App = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);
  useEffect(() => {
    0;
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          // console.log(token);
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
          // navigate("/",{replace:true});
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </>
  );
};

export default App;
