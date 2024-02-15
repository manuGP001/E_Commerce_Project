const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500 ;
    err.message = err.message || "Internal Server error";

    //wrong mongoDb id error
    if(err.name === "CastError") {
      const message = `Resource not Found with this id..
      Invalid ${err.path}` ;
      err = new ErrorHandler (message,400);
    }

    //Duplicate Key Error
    if(err.code == 11000) {
        const message = `Duplicate key ${Object.keys (err.keyvalue)} Entered`;
        err = new ErrorHandler(message,400);
    }

    //wrong jwt error
    if(err.name==="JsonWebTokenError") {
        const message = `Your URL is expired Please Try again later`;
        err = new ErrorHandler(message,400);
    }
    
    //jwt expired
    if(err.name==="TokenExpiredError") {
        const message = `Your URL is Expired`;
        err = new ErrorHandler(message,400);
    }

    res.status (err.statusCode).json({
        success: false,
        message:err.message,
    });
};
