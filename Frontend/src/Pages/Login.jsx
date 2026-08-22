import React from "react";
import SideNavbar from "../components/SideNavbar";

import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate("/Product");
  };
  const gotohome = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-100">

      <SideNavbar></SideNavbar>
      <div className="sticky overflow-hidden">
        <div
          id="topbar"
          className="flex justify-evenly pl-10 text-md gap-5 mt-3 "
        >
          <button onClick={gotohome}>
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
              alt=""
            />
          </button>
          <a
            className="shadow-sm shadow-black  flex justify-center items-center h-8 w-1/12 text-sm rounded-full"
            href=""
          >
            PRIVACY POLICY
          </a>
          <a
            className="shadow-sm shadow-black  flex justify-center items-center h-8 w-2/12 text-sm rounded-full"
            href=""
          >
            TERMS AND CONDITION OF USE
          </a>
          <a
            className="shadow-sm shadow-black  flex justify-center items-center h-8 w-2/12 text-sm rounded-full"
            href=""
          >
            TERMS AND CONDITION OF SALE
          </a>
          <a
            className="shadow-sm shadow-black  flex justify-center items-center h-8 w-2/12 text-sm rounded-full"
            href=""
          >
            LEGAL NOTICE
          </a>
          <a
            className="shadow-sm shadow-black  flex justify-center items-center h-8 w-1/12 text-sm rounded-full"
            href=""
          >
            RETURN POLICY
          </a>
          <a
            className="shadow-sm shadow-black border-black w-1/12 bordernded-md flex justify-center items-center h-8 text-sm rounded-full"
            href=""
          >
            ACCESSIBILITY
          </a>
        </div>
        <div className="flex justify-center items-center w-screen h-[70vh] ">
          <div className="mt-20 ">
            <div className="text-5xl font-semibold mt-20">LOGIN</div>
            <div className="ml-8 mt-10 ">
              <div className="text-2xl font-semibold">Ready to connect ?</div>
              <div className="text-md mt-6">
                Sign in with your EcoBazaar email and password or create a
                profile if you are a new customer.
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 border-b-gray-500 w-full mt-7 bg-gray-100"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={gotoProduct}
                  className="flex justify-center items-center bg-cyan-900 text-white w-2/6 mt-10 h-10 rounded-full"
                >
                  CONTINUE
                </button>
              </div>
              <div className="flex gap-4 justify-center items-center bg-gray-100 py-4 mt-8">
                {/* Facebook Button */}
                <button className="flex items-center px-6 py-2 text-white bg-blue-700 rounded-full ">
                  <span className="mr-2">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  Continue with Facebook
                </button>

                {/* Google Button */}
                <button className="flex items-center px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100">
                  <span className="mr-2">
                    <i className="fab fa-google"></i>
                  </span>
                  Continue with Google
                </button>

                {/* Apple Button */}
                <button className="flex items-center px-6 py-2 text-white bg-black rounded-full hover:bg-gray-800">
                  <span className="mr-2">
                    <i className="fab fa-apple"></i>
                  </span>
                  Continue with Apple
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
