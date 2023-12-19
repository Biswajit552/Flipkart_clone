import React, { useEffect, useState } from "react";
import { logo, loginpage } from "../assets";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { FcGoogle } from "react-icons/fc";
import Logininput from "../pages/Logininput";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTToken } from "../api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/actions/userActions";
import { alertWarning } from "../context/actions/alertActions";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        console.log(cred);
        if (cred) {
          cred.getIdToken().then((token) => {
            console.log(token);
            validateUserJWTToken(token).then((data) => {
              console.log(data);
              dispatch(setUserDetails(data));
            });
            navigate("/", { replace: true });
          });
        }
      });
    });
  };
  const signUpWithEmailPass = async () => {
    if (userEmail === "" || password === "" || confirm_password === "") {
      dispatch(alertInfo("Required feilds should not be empty"));
    } else {
      if (password === confirm_password) {
        setUserEmail("");
        setConfirm_password("");
        setPassword("");
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate("/login", { replace: true });
              });
            }
          });
        });
      } else {
        //alert message
        dispatch(alertWarning("Password Doesn't match"));
      }
    }
  };

  const signInWithEmailPass = async () => {
    if (userEmail !== "" && password !== "") {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        }
      );
    } else {
      //alert message
      dispatch(alertWarning("Password Doesn't match"));
    }
  };

  return (
    <div className=" w-screen h-[94vh]  bg-cover flex bg-[url('/src/assets/img/loginpage.jpg')]">
      {/*content box */}
      <div className="flex flex-col items-center  bg-cardOverlay  w-[100%] md:w-[40%] h-full z-10  backdrop-blur-sm  p-4 px-4 gap-4 -ml-8">
        {/*logo*/}
        <div className="flex items-center justify-start gap-4 w-full ml-20 ">
          <Link to={"/"}>
            <img src={logo} className="w-28" alt="" />
          </Link>
        </div>
        {/*welcome*/}
        <p className="text-3xl font-semibold text-headingColor font-serif">
          Welcome Back
        </p>
        <p className="text-xl text-textColor -mt-6 font-serif">
          {isSignup ? "Sign-Up" : "Sign-In"} with Following
        </p>
        {/*input section*/}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <Logininput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignup={isSignup}
          />

          <Logininput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignup={isSignup}
          />
          {isSignup && (
            <Logininput
              placeHolder={"Confirm password Here"}
              icon={<FaEnvelope className="text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignup={isSignup}
            />
          )}
          {!isSignup ? (
            <p>
              Doesn't have an account:
              <motion.button
                {...buttonClick}
                className=" text-blue-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignup(true)}
              >
                Create One
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account:
              <motion.button
                {...buttonClick}
                className=" text-blue-600 underline cursor-pointer bg-transparent font-serif"
                onClick={() => setIsSignup(false)}
              >
                Sign-in Here
              </motion.button>
            </p>
          )}

          {/*------------------------------------------*/}
          {/*button*/}

          {isSignup ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-green-400 text-white cursor-pointer text-xl capitalize hover:bg-green-600 transition-all duration-150 "
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-green-400 text-white cursor-pointer text-xl capitalize hover:bg-green-600 transition-all duration-150 "
              onClick={signInWithEmailPass}
            >
              Sign In
            </motion.button>
          )}
        </div>
        <div className=" flex items-center justify-center gap-16">
          <div className=" w-24 h-[1px] rounded-md  bg-orange-500  "></div>
          <p className=" text-green-500">OR</p>
          <div className=" w-24 h-[1px] rounded-md  bg-orange-500   "></div>
        </div>

        <motion.div
          {...buttonClick}
          className=" flex items-center justify-center px-20 py-2 bg-cardOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4 "
          onClick={loginWithGoogle}
        >
          <FcGoogle className=" text-3xl" />
          <p className=" capitalize text-base text-headingColor">
            Signin with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
