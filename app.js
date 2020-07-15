const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({
        sucess: 1,
        message: 'This is a restful api'
    });
});


app.listen(3000, () => {
    console.log('bat server running');
});