import React, { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from 'react-router-dom';
import {RxAvatar} from "react-icons/rx"
import { server } from '../../server';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")  
  const [email, setEmail]=useState("");
  const [password , setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, SetAvatar] = useState (null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers : { "Content-Type" : "multipart/form-data"},
    };

    const newForm = new FormData();
    newForm.append("file",avatar);
    newForm.append("name",name);
    newForm.append("email",email);
    newForm.append("password",password);
    
    axios.post(`${server}/create-user`,newForm,config).then((res)=> {
      if(res.data.success === true){
        navigate("/login");
      }
     
  }).catch((err)=> console.log(err));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    SetAvatar(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-8 sm:px-6
    lg:px-8">
     <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-3 text-centre text-3xl font-extrabold text-gray-900">Register As A New User</h2>
     </div>
     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg:white py-8 px-4 shadow sm:rounded-lg sm:px-10">

        

        <form className ="space-y-6" onSubmit={handleSubmit}>
         
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
         <div className="mt-1">
          <input className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm"
          type="text"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
          />
         </div>
         </div>

         <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
         <div className="mt-1">
          <input className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
          />
         </div>
         </div>

         <div>
          <label htmlFor="PassWord" className="block text-sm font-medium text-gray-700">Password</label>
         <div className="mt-1 relative" >
          <input className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm"
          type={visible ? "text" : "password"}
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          />
          {visible ? (
           <AiOutlineEye className="absolute right-2 top-2 cursor-pointer" size={25} onClick={()=> setVisible(false)}/>
          ) :(
            <AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer" size={25} onClick={()=>setVisible(true)}/>
          )}
          
          
         </div>
         </div>
         <div>
            <label 
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700"></label>
            <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {
                     avatar ? (
                        <img alt="avatar" src={URL.createObjectURL(avatar)}
                        className="h-full w-full object-cover rounded-full"/>

                     ) : (
                        <RxAvatar className="h-8 w-8"/>
                     )
                    }
                </span>
                <label htmlFor="file-input" className="ml-5 flex items-center justify-center px-4 py-2 
                border border-gray-300 rounded-md shadow-sm text-sm font-medium
                text-gray-700 bg-white hover:bg-gray-500">
                    <span>Upload a File</span>
                    <input type="file"
                     name="avatar"
                    id="file-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                    />
                </label>
            </div>
         </div>
         <div>
         <button type="submit"
         className="group-relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Submit
         </button>
         </div>
         <div className={`${styles.normalFlex}w-full`}>
          <h4>Already have an account?</h4>
         <Link to="/Login"
         className="text-blue-600 pl-2">Login </Link>
         </div>
        </form>
        </div>     
      </div>
    </div>
  );
};

export default Signup
