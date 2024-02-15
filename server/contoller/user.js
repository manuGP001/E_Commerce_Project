const express = require("express");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs= require("fs");
const jwt = require("jsonwebtoken");


const path = require("path");
const user = require("../model/user");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

router.post("/create-user",upload.single("file"), async(req , res, next) =>{
    try {const { name, email, password} =req.body;
    const userEmail = await User.findOne({email})
    if(userEmail){
        const fileName = req.file.filename;
        const filePath = `uploads/${fileName}`;
        fs.unlink(filePath, (err) => {
            if (err) {
                res.status(500).json({message:"Error in Deleting File"});
            } 
        });

        return next(new ErrorHandler ("user already Exists",400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const user = {
        name : name,
        email : email,
        password : password,
        avatar: fileUrl,
    };
    
    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:5173/activation/${activationToken}`;
    try {
       await sendMail ({
        email: user.email,
        subject: "Activate Your Account",
        message:`Hello ${user.name} Please Click on thr link to activate your accoount:${activationUrl}`,
       }) 
       res.status(201).json({
        success: true,
        message:`Please check your mail :- ${user.email} to activate your account`,
       });
    } catch (err) {
        return next(new ErrorHandler(err.message,500));
    }
    } catch (err) {
        return next (new ErrorHandler(err.message,400));
    }
    });
//function to create activation token
const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn:"5m",
    });
};

//user activation

router.post("/activation", catchAsyncErrors(async(req, res, next)=>{
    try {
       const { activation_token} = req.body;
       const newUser = jwt.verify(activation_token,process.env.ACTIVATION_SECRET); 
       if(!newUser) {
        return next(new ErrorHandler ("Invalid Token",400));
       }

       const {name, email, password, avatar} = newUser;
    let user = await User.findOne({email});
    if (user) {
        return next(new ErrorHandler("User already Exists",400));
    }

       user = await User.create({ name, email, password, avatar});
       sendToken(user, 201 , res);
    } catch (err) {
       return next(new ErrorHandler(err.message,500)); 
    }
})
);

module.exports = router;