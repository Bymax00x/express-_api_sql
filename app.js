const express = require('express');
const app = express();
require("dotenv").config();

app.get('/', (req, res) => {
    res.json({
        sucess: 1,
        message: 'This is a restful api'
    });
});


app.listen(process.env.APP_PORT, () => {
    console.log('bat server running');
});