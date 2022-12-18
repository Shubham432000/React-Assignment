import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateValue } from "../action/Action";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const EditEmployee = () => {
  const employeeData = useSelector((state) => state.formReducer);

  console.log(employeeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [first, setFirst] = useState(employeeData.Data1.first);
  const [last, setLast] = useState(employeeData.Data1.last);
  const [add1, setAdd1] = useState(employeeData.Data1.add1);
  const [add2, setAdd2] = useState(employeeData.Data1.add2);
  const [mob, setMob] = useState(employeeData.Data1.mob);
  const [pan, setPan] = useState(employeeData.Data1.pan);
  const [gender, setGender] = useState(employeeData.Data1.gender);
  const [mart, setMart] = useState(employeeData.Data1.mart);
  const id = employeeData.Data1.id;

  const onSubmit = () => {
    if (
      swal({
        icon: "success",
        title: `${employeeData.Data1.first} Your Information Edit Succesfully`,
      })
    ) {
      dispatch(
        updateValue({ id, first, last, add1, add2, mob, pan, gender, mart })
      );
      navigate("/employee");
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
                  First Name:
                </label>
                <br />
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ml-[30px]">
                  Last Name:
                </label>
                <br />
                <input
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  required
                  className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
              <div className="flex flex-col mt-[20px]">
                <label htmlFor="" className="mt-[7px]">
                  Address1
                </label>
                <input
                  type="text"
                  value={add1}
                  onChange={(e) => setAdd1(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
                <label htmlFor="" className="mt-[7px] ">
                  Address2
                </label>
                <input
                  type="text"
                  value={add2}
                  onChange={(e) => setAdd2(e.target.value)}
                  required
                  className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
                />
              </div>
              <label htmlFor="" className="mt-[20px]">
                Mobile no
              </label>
              <input
                type="string"
                value={mob}
                required
                onChange={(e) => setMob(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Pan no
              </label>
              <input
                type="string"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                required
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <div className="mt-[40px]">
                <label htmlFor="" className="">
                  Gender:
                </label>
                <select
                  name=""
                  id=""
                  className="ml-4"
                  value={gender}
                  required
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <label htmlFor="" className="ml-[180px]">
                  Martiual Status:
                </label>
                <select
                  name=""
                  id=""
                  className="ml-4"
                  value={mart}
                  required
                  onChange={(e) => setMart(e.target.value)}
                >
                  <option></option>
                  <option>Married</option>
                  <option>Unmarried</option>
                </select>
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
