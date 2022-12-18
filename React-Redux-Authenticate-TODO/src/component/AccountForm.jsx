import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { accountValue } from "../action/Action";
import { useNavigate } from "react-router-dom";


const AccountForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const time = new Date()
    const id = time.getTime()

    const [name,setName]=useState("")
    const [salary,setSalary]=useState("")
    const [mob,setMob]=useState("")
    const [resignation,setResignation]=useState("")

    const accountForm =(e)=>{
      e.preventDefault();
        dispatch(accountValue({id,name,salary,mob,resignation})
        )
        
       navigate("/deparment/accountinfo")
        
    }
  return (
    <>
      <section>
        
        <form action="" onSubmit={accountForm}>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[420px] ml-[500px] mt-[100px]">
            <h1 className="text-center mt-2">Account Form</h1>
            <div className="flex flex-col justify-center ml-[50px]">
            
              <label htmlFor="" className="mt-[20px]">
              Employee Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                 Salary
              </label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Mobile Number
              </label>
              <input
                type="text"
                value={mob}
                onChange={(e) => setMob(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Resignation
              </label>
              <input
                type="text"
                value={resignation}
                onChange={(e) => setResignation(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            
            <button className="ml-[120px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AccountForm;

