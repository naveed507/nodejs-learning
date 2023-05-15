// const express = require('express')
import express from 'express'
const app =express()
const port= process.env.PORT || '3000'
import stu from './routes/student.js';

app.get('/', function (req, res){
    res.send("Hello World !")
});

app.use('/students', stu);

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})