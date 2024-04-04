require('dotenv').config();
const express = require('express');//import express to this file
const config = require('./config/dbConfig'); 
const app = express();//intailize the app with express 
// establish  connection with DB
config.connect();


app.get('/health', (req,res) => {
    res.json({ message: 'server up and running' });
})



app.listen(process.env.PORT, () => {
    console.log(`listening to PORT:${process.env.PORT}`)
})
