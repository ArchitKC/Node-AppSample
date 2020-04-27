const express = require('express');
const routers = express.Router();

routers.get('/', (req, res)=>{
    res.render('index',{title: "My Express Method", message:"Are you okay Saramma?"});
});


module.exports = routers;