
import './App.css';
import Signup from './Component/Signup';
import Login from "./Component/Login"
import Navbar from './Component/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import ProtectedComponent from './Component/ProtectedComponent';
import About from './Component/About';
import Product from './Component/Product';
import Footer from './Component/Footer';
import CardDetails from './Component/CardDetails';
import Skelton from './Component/Skelton';

function App() {
  return (
    
    <>
     <Navbar/>
      <Routes>
       <Route element={<ProtectedComponent/>}>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/carddetails' element={<CardDetails/>}/>
       <Route path='/sk' element={<Skelton/>}/>
     
    
     </Route> 

     <Route path='/' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
