'use strict';


const express=require('express');
require('dotenv').config();

const cors=require('cors');

const app=express();

app.use(cors());

const PORT=3000;

const axios=require("axios");
app.get('/', handleHome);

app.get("/current", handlerSearch);

function handleHome(req, res){
    res.send("I am live")
}
async function handlerSearch(req, res){
    const lat=req.query.lat;
    const lon=req.query.lon;
    const url= `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=27aa3dffd38045678781cc0579df2711&include=minutely`;
    const dataRes=await axios.get(url);
    console.log(dataRes);

    res.send(dataRes.data);
}

app.listen(PORT,()=>{
    console.log(`server lising on port ${PORT}`);
})



