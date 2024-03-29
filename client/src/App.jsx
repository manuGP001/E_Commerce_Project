import React, { useEffect } from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom" ;
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LoginPage, SignupPage , ActivationPage , HomePage} from "./Routes";
import axios from 'axios';
import { server } from './server';


const App = () => {
  useEffect(() => {
  axios.get(`${server}/getuser`, {
    withCredentials: true,
  })
  .then((res) => toast.success(res.data.message))
  .catch((err) => {
    toast.error(err.response.data.message);
  });
},[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element ={<LoginPage/>}/>
      <Route path="/Home" element ={<HomePage/>}/>
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/activation/:activation_token" element=
      {<ActivationPage/>}/>
    </Routes>
    <ToastContainer
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     transition:Bounce
     />
    </BrowserRouter>
  );
  
};

export default App
