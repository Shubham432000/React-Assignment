import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './account/Signup';
import Login from './account/Login';
import PrivateComponent from './component/privateComponent';
import Form from './component/Form';
import Employee from './component/Employee';
import EditEmployee from './component/EditEmployee';
import DeparmentForm from './component/DeparmentForm';
import Deparment from './component/Deparment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditDeparment from './component/EditDeparment';
// import AccountForm from './component/AccountForm';
import AccountInfo from './component/AccountInfo';
import AccountEdit from './component/Accountedit';
// import Table from "./component/Table";
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/editEmployee" element={<EditEmployee />} />
          <Route path="/deparmentform" element={<DeparmentForm />} />
          <Route path="/deparment" element={<Deparment />}>
            {/* <Route path="accountform" element={<AccountForm />} /> */}
            <Route path="accountinfo/:id" element={<AccountInfo />} />
            <Route path="accountedit" element={<AccountEdit />} />
          </Route>
          <Route path="/editdeparment" element={<EditDeparment />} />
          {/* <Route path="/accountform" element={<AccountForm />}/>
          <Route path="/accountinfo" element={<AccountInfo />}/>
          <Route path="/accountedit" element={<AccountEdit />}/> */}
        </Route>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
