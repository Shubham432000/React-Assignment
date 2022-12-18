import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { depaUpdate } from "../action/Action";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const EditEmployee = () => {
  const depaData = useSelector((state) => state.deparmentReducer);

  console.log(depaData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [depname,setdepName]=useState(depaData.Info1.depname)
  const [identity,setIdentity]=useState(depaData.Info1.identity)
  const [noemployee,setNoemployee]=useState(depaData.Info1.noemployee)
  const [hod,setHod]=useState(depaData.Info1.hod)
  
  const id = depaData.Info1.id;

  console.log("edit depa",depname,hod)
  const onSubmit = () => {
    if (
      swal({
        icon: "success",
        title: `${depaData.Info1.depname} Your Information Edit Succesfully`,
      })
    ) {
      dispatch(
        depaUpdate({id, depname,identity,noemployee,hod })
      );
      navigate("/deparment");
    }
  };

  return (
    <>
      <section>
        <h1 className="ml-[350px] mb-[50px]">Edit Employee</h1>

        <form action="" onSubmit={onSubmit}>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[700px] h-[450px] ml-[350px] mt-[30px]">
            <div className="flex flex-col justify-center ml-[50px]">
              <div className="flex flex-row mt-[20px]">
                <label htmlFor="" className="mt-[7px]">
                  Deparment Name:
                </label>
                <br />
                <input
                  type="text"
                  value={depname}
                  onChange={(e) => setdepName(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ml-[30px]">
                  Employee id:
                </label>
                <br />
                <input
                  type="text"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
              <div className="flex flex-col mt-[20px]">
                <label htmlFor="" className="mt-[7px]">
                  No Of Employees
                </label>
                <input
                  type="text"
                  value={noemployee}
                  onChange={(e) => setNoemployee(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ">
                  Head of deparment
                </label>
                <input
                  type="text"
                  value={hod}
                  onChange={(e) => setHod(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
             
             
              
            </div>
          </div>

          <button className="ml-[650px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
            Submit
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};
export default EditEmployee;
