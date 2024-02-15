const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL).then
    ((data)=> {
        console.log(`MongoDb connected with : ${data.connection.host}`);
    });//to display the name of the host using chaining
};


module.exports=connectDatabase;