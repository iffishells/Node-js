const express = require('express');
const mysql = require('mysql');
const bodyParser= require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function (req ,resp) {

    
    
    resp.sendFile(__dirname + "/index.html");
    console.log("pass by index.html portion");
   
});

app.post("/" , function (req ,resp) {

    request("GET https://apiv2.bitcoinaverage.com/metadata", function(error,response , body)
    {
        console.log("getting https request")
        var data = JSON.parse(body);
        var price = data.averages.week;
        
        resp.send("Get return ")
    })
    
});



app.listen("3000", function (req,resp) {
    
    console.log("server listen at 3000")
})