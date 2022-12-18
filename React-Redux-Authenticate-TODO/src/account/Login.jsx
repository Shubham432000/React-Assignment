import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../action/Action";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateData = () => {
    if (!email) {
      toast.warn("Please Enter Valid Email !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!password) {
      toast.warn("Please Enter Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (password.length < 6) {
      toast.warn("Please Enter Minimum 6 digit Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (email === account.email && password === account.password) {
      // alert("Login Succecfully");

      toast.success(` ${account.name} your Login succesfully`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return true;
    } else {
      toast.error("Wrong Crendiential !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
  };

  function submitForm(e) {
    e.preventDefault();

    if (validateData()) {
      dispatch(
        logIn({
          email,
          password,
        })
      );
      navigate("/home");
    }
  }
  return (
    <>
      <section>
        <form action="" onSubmit={submitForm}>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[350px] ml-[500px] mt-[100px]">
            <h1 className="text-center mt-2">Login</h1>
            <div className="flex flex-col justify-center ml-[50px]">
              <label htmlFor="" className="mt-[20px]">
                Email Id
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            <button className="ml-[120px] mt-[60px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
