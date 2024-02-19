import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom" ;
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LoginPage, SignupPage , ActivationPage } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element ={<LoginPage/>}/>
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
