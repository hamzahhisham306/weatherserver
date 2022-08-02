'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = 3000;
const axios = require("axios");

app.get("/", handleHome);
app.get("/current", handleSearch);



function handleHome(req, res) {
    res.send("I am alive");
}

async function handleSearch(req, res) {
    const lat=req.query.lat;
    const lon=req.query.lon;  
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=d4b28539a2b24563a94b4a3d14d3d37f&include=minutely`;

    const photoRes = await axios.get(url);
    let arrayWeather=[];
    arrayWeather[0]=photoRes.data.data[0].datetime;
    arrayWeather[1]=photoRes.data.data[0].weather.description;
    let classWeather=new weather(arrayWeather[0] ,arrayWeather[1]);
    res.send(classWeather);

}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

class weather{
    constructor(datetime, description){
        this.description=description;
        this.date=datetime;
       
        
    }
    
}


