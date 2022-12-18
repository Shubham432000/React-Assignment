import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../action/Action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state1 = useSelector((state) => state.account);

  console.log(state1);

  const logout1 = () => {
    if (
      toast.success(` ${state1.name} your Logout succesfully`, {
        position: toast.POSITION.TOP_CENTER,
      })
    ) {
      dispatch(logOut());
      navigate("/");
    }
  };

  return (
    <header className="text-gray-600 body-font">
      {state1.isLoggedIn ? (
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-sky-100 shadow-md shadow-sky-100 border-b border-sky-100">
          <a className="flex title-font font-medium items-center text-gray-900 hover:text-white hover:bg-sky-400 rounded-full mb-4 md:mb-0">
            <span className="px-3 py-1 text-xl">MOOD</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center font-semibold">
            <Link
              className="mr-5 text-blue-600/100 cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="mr-5  cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/employee"
            >
              Employee
            </Link>

            <Link
              className="mr-5  cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/form"
            >
              Form
            </Link>
            <Link
              className="mr-5  cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/deparment"
            >
              Deparment 
            </Link>
            
          
              
            {/* <Link
              className="mr-5 hover:text-black-900 cursor-pointer hover:text-white hover:bg-sky-700 rounded-full px-2 py-1"
             
              to="/deparment/accountform"
              
            >
              Account
            </Link>
             */}
           
           
           
            
            <Link
              className="mr-5 hover:text-black-900 cursor-pointer hover:text-white hover:bg-red-700 rounded-full px-2 py-1"
              onClick={logout1}
              to="/"
            >
              Logout
            </Link>
          </nav>
        </div>
      ) : (
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-sky-100 shadow-md shadow-sky-100 border-b border-sky-200 ">
          <a className="flex title-font font-medium items-center text-gray-900 hover:text-white hover:bg-sky-400 rounded-full mb-4 md:mb-0">
            <span className=" px-3 py-1 text-xl">MOOD</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  text-lg font-semibold">
            <Link
              className="mr-5  cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="mr-5  cursor-pointer hover:text-white hover:bg-sky-400 rounded-full px-2 py-1"
              to="/"
            >
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
