import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletData } from "../action/Action";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { editData } from "../action/Action";
//import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import Table from "./Table";

const Employee = () => {
  const detectForm = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("employee", detectForm);

  function removeData(employeeData) {
    // if(msg(employeeData)){
    // dispatch(deletData(employeeData.id));
    // }

    swal({
      title: `${employeeData.first} Are you sure?`,
      text: "Once deleted, you will not be able to recover this information!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletData(employeeData.id));
        swal("Poof! Your information  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your information  is safe!");
      }
    });
  }

  function editValue(edit) {
    dispatch(editData(edit.id));

    navigate("/editEmployee");
  }

  const rows = [
    { label: "First name", value: "first" },
    { label: "Last name", value: "last" },
    { label: "Add1", value: "add1" },
    { label: "Add2", value: "add2" },
    { label: "Mobile no", value: "mob" },
    { label: "Pan no", value: "pan" },
    { label: "Gender", value: "gender" },
    { label: "Martiual status", value: "mart" },
  ];

  Table.propTypes = {
    coloumns: PropTypes.array,
    rows: PropTypes.array,
    title: PropTypes.string,
    delet: PropTypes.func,
    edit: PropTypes.func,
  }
  
  return (
    <div className="ml-[250px] mt-[100px]">
      {/* <h1 className="ml-[350px] mb-[50px]">View Employee</h1> */}
      {/* <table className="table-fixed border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-4">First name</th>
            <th className="border border-slate-300 p-4">Last name</th>
            <th className="border border-slate-300 p-4">Add1</th>
            <th className="border border-slate-300 p-4">Add2</th>
            <th className="border border-slate-300 p-4">Mobile no</th>
            <th className="border border-slate-300 p-4">Pan no</th>
            <th className="border border-slate-300 p-4">Gender</th>
            <th className="border border-slate-300 p-4">Martiual status</th>
          </tr>
        </thead>

        <tbody>
          {detectForm.Data.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300 p-4">{item.first}</td>
              <td className="border border-slate-300 p-4">{item.last}</td>
              <td className="border border-slate-300 p-4">{item.add1}</td>
              <td className="border border-slate-300 p-4">{item.add2}</td>
              <td className="border border-slate-300 p-4">{item.mob}</td>
              <td className="border border-slate-300 p-4">{item.pan}</td>
              <td className="border border-slate-300 p-4">{item.gender}</td>
              <td className="border border-slate-300 p-4">{item.mart}</td>
              <td className="border border-slate-300 p-4">
                <HiPencilAlt onClick={() => editValue(item)} />
              </td>
              <td className="border border-slate-300 p-4">
                <FaTrashAlt onClick={() => removeData(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>  */}
      {/* <ToastContainer autoClose={2000} /> */}
      
      <Table
        coloumns={detectForm.Data}
        rows={rows}
        title={"Employees"}
        delet={removeData}
        edit={editValue}
      />
    </div>
  );
};

export default Employee;

// (e)=>{deletData(e,index)}

//    <button
// key={item.id}
// onClick={() => removeData(item)}
// className="text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2"
// >
// Delete
// </button>
