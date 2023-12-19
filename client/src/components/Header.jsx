import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { RiHome4Line } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { CiCoinInsert } from "react-icons/ci";
import { TiPlusOutline } from "react-icons/ti";
import { FiShoppingBag } from "react-icons/fi";
import { GoTag } from "react-icons/go";
import { TfiGift } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";
import { fadeInOut } from "../animations";

const Header = () => {
  const [n, setN] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const user = useSelector((state) => state.user);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setN(true);
  };
  const showNavbar1 = () => {
    navRef.current.classList.toggle("responsive_nav");
    setN(false);
  };
  //signout part
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header className="bg-white gap-3 flex justify-around md:justify-evenly">
        <div className="flex gap-3 ">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-24 h-12" />
          </Link>
          <input
            type="text"
            placeholder="Search for Products, Brand and More ...."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none font-serif bg-slate-100 rounded-xl text-black w-24 md:w-[590px]"
          />
          <button>
            <FaSearch className="text-slate-700" />
          </button>
        </div>
        <div className="flex gap-3">
          <div className="font-bold flex items-center gap-1 hover:border hover:rounded-lg">
            <Link
              to={"login"}
              className=" flex items-center gap-2"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {user ? (
                <motion.img
                  className=" w-10 h-10 object-cover rounded-full"
                  src={user ? user.picture : <FaRegCircleUser />}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <FaRegCircleUser />
              )}
              {user ? user.name : "Login"}
            </Link>
            {open ? (
              <VscTriangleDown className="rotate-180 hidden md:block" />
            ) : (
              <VscTriangleDown className="hidden md:block" />
            )}
          </div>
          {open ? (
            <>
              {/* <div className="bg-black w-3 h-3 mt-10 rotate-45"></div> */}
              <motion.ul
                {...fadeInOut}
                className="absolute z-10 Drop-Down rounded-b-xl"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <li className="flex items-center gap-2">
                  <FaRegCircleUser />
                  My Profile
                </li>
                <li className="flex items-center gap-2">
                  <CiCoinInsert />
                  SuperCoin Zone
                </li>
                <li className="flex items-center gap-2">
                  <TiPlusOutline /> FlipKart Plus Zone
                </li>
                <li className="flex items-center gap-2">
                  <FiShoppingBag />
                  Orders
                </li>
                <li className="flex items-center gap-2">
                  <FaRegHeart />
                  Wishlist
                </li>
                <li className="flex items-center gap-2">
                  <GoTag />
                  Coupons
                </li>
                <li className="flex items-center gap-2">
                  <TfiGift />
                  Gift Cards
                </li>
                <li className="flex items-center gap-2">
                  <IoMdNotificationsOutline />
                  Notifications
                </li>
                <li className="flex items-center gap-2" onClick={signOut}>
                  <MdLogout />
                  Logout
                </li>
              </motion.ul>
            </>
          ) : (
            ""
          )}

          {/* <button className="md:hidden">
          <IoMenu />
        </button> */}
          <nav className="flex">
            <div className=" hidden md:flex">
              <Link to="/" className="lg:mr-4 flex gap-1 items-center">
                <RiHome4Line />
                Home
              </Link>
              <Link to="cart" className="lg:mr-4 flex items-center  gap-1">
                <MdOutlineShoppingCart />
                Cart
              </Link>
              {user?.user_id === import.meta.env.VITE_REACT_APP_ADMIN_ID && (
                <Link
                  to={"/dashboard/home"}
                  className="lg:mr-4 items-center flex "
                >
                  Admin-DashBoard
                </Link>
              )}
              <Link
                to="/"
                className="lg:mr-4 items-center flex gap-1"
                onClick={signOut}
              >
                <MdLogout />
                Logout
              </Link>
            </div>
            <ul ref={navRef} className=" absolute z-10 Drop-Down lg:hidden">
              <li className="flex items-center gap-2 bg-blue-400 ">
                {user ? (
                  <motion.img
                    className=" w-10 h-10 object-cover rounded-full"
                    src={user ? user.picture : <FaRegCircleUser />}
                    whileHover={{ scale: 1.15 }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaRegCircleUser />
                )}
                {user ? user.name : "My Profile"}
              </li>
              <li className="flex items-center gap-2">
                <CiCoinInsert />
                SuperCoin Zone
              </li>
              <li className="flex items-center gap-2">
                <TiPlusOutline /> FlipKart Plus Zone
              </li>
              <li className="flex items-center gap-2">
                <FiShoppingBag />
                Orders
              </li>
              <li className="flex items-center gap-2">
                <FaRegHeart />
                Wishlist
              </li>
              <li className="flex items-center gap-2">
                <GoTag />
                Coupons
              </li>
              <li className="flex items-center gap-2">
                <TfiGift />
                Gift Cards
              </li>
              <li className="flex items-center gap-2">
                <IoMdNotificationsOutline />
                Notifications
              </li>
              <li className="flex items-center gap-2" onClick={signOut}>
                <MdLogout />
                Logout
              </li>
            </ul>
          </nav>

          {n ? (
            <button
              className="nav-btn nav-close-btn lg:hidden"
              onClick={showNavbar1}
            >
              <FaTimes />
            </button>
          ) : (
            <button className="nav-btn lg:hidden" onClick={showNavbar}>
              <FaBars />
            </button>
          )}
        </div>
      </header>
      {/* {open ? (
        <ul className="border border-orange-500  overflow-hidden absolute  mx-auto Drop-Down ">
          <li>contact</li>
          <li>cncc</li>
          <li>ckdd</li>
          <li>dbdid</li>
          <li>ddid</li>
        </ul>
      ) : (
        ""
      )} */}
    </>
  );
};

export default Header;
