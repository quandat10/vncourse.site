const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path:'./config.env'});

const port = process.env.PORT||3000;
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);



const db = mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB connect succesfull ⛱⛱')
}).then(err=>{
    // console.log(err);
})


app.listen(port,()=>{
    console.log("Server is runing.... on port",port);
})