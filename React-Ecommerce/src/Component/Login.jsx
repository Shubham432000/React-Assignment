import React, { useState } from "react";
import { ReactComponent as YourSvg } from "../image/mobile2.svg";
import { useDispatch,useSelector } from "react-redux";
import { Login } from "../action/Action";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const loginValidation = useSelector((state)=>state.accountReducer)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const validateData = () => {
    if (!email) {
      return false;
    }
    if (!password) {
      return false;
    }
    if(email === loginValidation.email && password === loginValidation.password){
      alert("login succesfully")
      return true
    }else {
      alert("wrong credential")
      return false
    }
   
  };


  const LoginForm = (e) => {
    e.preventDefault();
    if (validateData()) {
      dispatch(Login({ email, password }));
    }
    console.log(email, password);
    navigate("/home")
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  flex flex-wrap md:flex-wrap lg:flex-wrap items-center">
          <div className="lg:w-1/3 md:w-1/2 md:pr-1 lg:pr-0 pr-0">
            <YourSvg />
          </div>
          
            <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <form action="" onSubmit={LoginForm}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Button
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
              </form>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Signup;
