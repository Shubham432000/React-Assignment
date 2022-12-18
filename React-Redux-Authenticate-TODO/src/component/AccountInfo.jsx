import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import PropTypes from 'prop-types';
import { accountDelet } from '../action/Action';
import { accountEdit } from '../action/Action';
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';

const AccountInfo = () => {

    const Account = useSelector((state)=>state.Account2Reducer)

    const [data,setData]=useState([])

const dispatch = useDispatch()
const navigate = useNavigate()
const {id}=useParams()


const compare=()=>{
  let compareData=Account.accountData.filter((e)=>{
    return(e.id == id)
  })
  setData(compareData)
}

useEffect(() => {
 compare()
}, [id]);
    function removeAcc(Data) {
      // if(msg(employeeData)){
      // dispatch(deletData(employeeData.id));
      // }
  
      swal({
        title: `${Data.name} Are you sure?`,
        text: "Once deleted, you will not be able to recover this information!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(accountDelet(Data.id));
          swal("Poof! Your information  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your information  is safe!");
        }
      });
    }

    function editAcc(edit) {
      dispatch(accountEdit(edit.id));
  
      navigate("/deparment/accountedit");
    }

    const rows = [
        { label: "Employee name", value: "name" },
        { label: "salary", value: "salary" },
        { label: "Mobile No", value: "mob" },
        { label: "Resignation", value: "resignation" },
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
      <Table
      //  coloumns={Account.accountData}
      coloumns={data}
       rows={rows}
       title={"Account"}
        delet={removeAcc}
       edit={editAcc}
       />
    </>
  );
}

export default AccountInfo;
