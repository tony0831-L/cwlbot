const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resModel = require('./dataModel/restaurant');

const url = "mongodb+srv://tony0831:tony0831Tony09@cluster0.kf3ih.mongodb.net/cwl-wm?retryWrites=true&w=majority";
const resRouter = require('./routes/resRouter')
const userModel=require('./routes/userRouter')

const app=express();
app.use(express.json());
app.use(cors());
app.use('/res',resRouter);
app.use('/user',userModel);


app.listen(process.env.PORT || 3000,()=>{
    mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    mongoose.connection.once("open",()=>{
        console.log("伺服器與數據庫ok!")
    });
})
