const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const LiveStep = require('./modal/Live')
dotenv.config()

mongoose.connect(process.env.DB_CONNECT,()=>{
    console.log('db connected...!')
})



app.get('/:id',async(req,res) =>{
    const livestep = await LiveStep.find({userid:req.params.id})
    res.json({livestep})
})

app.listen(process.env.PORT,()=>{
    console.log('connected..!')
})