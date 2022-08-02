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
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=27aa3dffd38045678781cc0579df2711&include=minutely`;

    const photoRes = await axios.get(url);
    console.log(photoRes.data);

    

    res.send(photoRes.data);

}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})





