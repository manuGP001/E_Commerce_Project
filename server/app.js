const express= require ("express");
const ErrorHandler = require("./middleware/Error");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
})
);
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({extended : true}));

//routes import
const user = require ("./contoller/user");
app.use("/api/v2",user);




// for error handling
app.use(ErrorHandler);

module.exports = app;