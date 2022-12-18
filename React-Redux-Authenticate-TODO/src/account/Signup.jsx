import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../action/Action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateData = () => {
    if (!name) {
      toast.warn("Please Enter Valid Name !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!email) {
      toast.warn("Please Enter Valid Email !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!password) {
      toast.warn("Please Enter Valid Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    } else if (password.length < 6) {
      toast.warn("Please Enter Minimum 6 digit Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (name && email && password) {
      msg();
      return true;
    }

    return true;
  };

  const msg = () => {
    toast.success(`${name} your Signup Sucessfully & Please Login`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateData()) {
      dispatch(signUp({ name, email, password }));
      navigate("/login");
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <section>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[350px] ml-[500px] mt-[100px]">
            <h1 className="text-center mt-2">Signup</h1>
            <div className="flex flex-col justify-center ml-[50px]">
              {/* <h1 >welcome{detectSign.account}</h1> */}
              <label htmlFor="" className="mt-[20px]">
                First Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Email Id
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            <button className="ml-[120px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
              Submit
            </button>
          </div>
        </section>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Signup;
