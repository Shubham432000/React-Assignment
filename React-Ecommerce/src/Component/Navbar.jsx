import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../action/Action";
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  const Valid = useSelector((state) => state.accountReducer);
  const cardInfo=useSelector((state)=>state.cardReducers.card)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAccount = () => {
    dispatch(Logout());
    navigate("/");
  };
  return (
    <>
      <header className="text-gray-600 body-font">
        {Valid.isLoggedIn ? (
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">E-Commerce</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/home">
                Home
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/about">
                About
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/product">
                Product
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/carddetails">
                <div className="flex space-x-2 justify-center">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  >
                    <TiShoppingCart size={30}/>
                    <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
                     {cardInfo.length}
                    </span>
                  </button>
                </div>
              </Link>
              {/* <Link className="mr-5 hover:text-gray-900 relative" to='/about'><TiShoppingCart size={40}/>
      <span className='absolute top-0 right-0 bottom-1px font-bold  text-2xl'>5</span></Link> */}
              <Link
                onClick={logoutAccount}
                className="mr-5 hover:text-gray-900"
                to="/login"
              >
                Logout
              </Link>
            </nav>
          </div>
        ) : (
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">E-Commerce</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/">
                Signup
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/login">
                Login
              </Link>
            </nav>
            {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
