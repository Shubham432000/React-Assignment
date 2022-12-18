import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { depaValue } from "../action/Action";
import { useNavigate } from "react-router-dom";


const DeparmentForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const time = new Date()
    const id = time.getTime()

    const [depname,setdepName]=useState("")
    const [identity,setIdentity]=useState("")
    const [noemployee,setNoemployee]=useState("")
    const [hod,setHod]=useState("")

    const depaForm =(e)=>{
      e.preventDefault();
        dispatch(depaValue({id,depname,identity,noemployee,hod})
        )
        
        navigate("/deparment")
        
    }
  return (
    <>
      <section>
        
        <form action="" onSubmit={depaForm}>
          <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[420px] ml-[500px] mt-[100px]">
            <h1 className="text-center mt-2">Deparment Form</h1>
            <div className="flex flex-col justify-center ml-[50px]">
            
              <label htmlFor="" className="mt-[20px]">
              Deparment Name
              </label>
              <input
                type="text"
                value={depname}
                onChange={(e) => setdepName(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
              Department Id
              </label>
              <input
                type="text"
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                No Of Employee
              </label>
              <input
                type="text"
                value={noemployee}
                onChange={(e) => setNoemployee(e.target.value)}
                className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[20px]">
                Head Of Deparment
              </label>
              <input
                type="text"
                value={hod}
                onChange={(e) => setHod(e.target.value)}
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

export default DeparmentForm;
