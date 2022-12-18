import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formData } from "../action/Action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [mob, setMob] = useState("");
  const [pan, setPan] = useState("");
  const [gender, setGender] = useState("");
  const [mart, setMart] = useState("");

  let date = new Date();
  let id = date.getTime();
  const validatedata = () => {
    if (!first) {
      toast.warn("Please Enter Valid Name !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!last) {
      toast.warn("Please Enter Valid Last Name !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!add1) {
      toast.warn("Please Enter  Address1 !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!mob) {
      toast.warn("Please Enter Address2 !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }

    if (!pan) {
      toast.warn("Please Enter Pan No !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }

    if (!gender) {
      toast.warn("Please Enter Gender !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!mart) {
      toast.warn("Please Enter martiual status !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }

    return true;
  };

  const Data = (e) => {
    e.preventDefault();
    console.log(first, last, add1, add2, pan, gender, mart);

    if (validatedata()) {
      dispatch(
        formData({
          id,
          first,
          last,
          add1,
          add2,
          mob,
          pan,
          gender,
          mart,
        })
      );
      navigate("/employee");
    }
  };
  return (
    <section>
      <form action="" onSubmit={Data}>
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
  );
};

export default Form;
