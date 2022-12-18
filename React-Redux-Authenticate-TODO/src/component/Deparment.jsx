import React from "react";
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Table from "./Table";
import { depaDelet } from "../action/Action";
import { depaEdit } from "../action/Action";
//import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import PropTypes from 'prop-types';
//import { Link } from "react-router-dom";

const Deparment = () => {
  const val = useSelector((state) => state.deparmentReducer);
  const navigate = useNavigate();
  console.log("infor", val);

  const dispatch = useDispatch();

  const deparmentPage = () => {
    navigate("/deparmentform");
  };

  function removeDepa(Data) {
    // if(msg(employeeData)){
    // dispatch(deletData(employeeData.id));
    // }

    swal({
      title: `${Data.depname} Are you sure?`,
      text: "Once deleted, you will not be able to recover this information!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(depaDelet(Data.id));
        swal("Poof! Your information  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your information  is safe!");
      }
    });
  }

  function editDepa(edit) {
    dispatch(depaEdit(edit.id));

    navigate("/editdeparment");
  }

  const rows = [
    { label: "Deparment name", value: "depname" },
     { label: "Department Id", value: "identity" },
    { label: "No Of Employee", value: "noemployee" },
    { label: "Head Of Deparment", value: "hod" },
  ];

  Table.propTypes = {
    coloumns: PropTypes.array,
    rows: PropTypes.array,
    title: PropTypes.string,
    delet: PropTypes.func,
    edit: PropTypes.func,
  }
  return (
    <>
      <div className="container  flex flex-row justify-end mt-[70px] cursor-pointer">
        <div>
          <AiOutlinePlusCircle onClick={() => deparmentPage()} size="35px" />
        </div>
        {/* <div className="ml-[30px]">
          <Link  to="/deparment/accountform">Account</Link>
        </div>
        <Outlet/> */}
        
      </div>
      <div className="ml-[400px] mt-[100px]">
        {/* <h1 className="ml-[250px] mb-[50px]">Deparment Employee</h1> */}
        {/* <table className="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-4">Deparment name</th>
              <th className="border border-slate-300 p-4">Employee Id</th>
              <th className="border border-slate-300 p-4">No Of Empoyee</th>
              <th className="border border-slate-300 p-4">Head Of Deparment</th>
            </tr>
          </thead>

          <tbody>
            {val.Info.map((item) => (
              <tr key={item.id}>
                <td className="border border-slate-300 p-4">{item.depname}</td>
                <td className="border border-slate-300 p-4">{item.identity}</td>
                <td className="border border-slate-300 p-4">
                  {item.noemployee}
                </td>
                <td className="border border-slate-300 p-4">{item.hod}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <Table
          coloumns={val.Info}
          rows={rows}
          title={"Deparment"}
          delet={removeDepa}
          edit={editDepa}
        />
      </div>
    </>
  );
};

export default Deparment;
