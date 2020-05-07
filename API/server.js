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

    console.log("in post--");
    request("https://bitcoinskoers.com/" ,function (errors ,response ,body) {
        
        if(!!errors)
        {
            console.log("Error : inside request portion")
        }
        else {
        
            // var data = JSON.parse(body.cars); //convert into the json format
            // console.log(data);
            resp.send("oky Done")  //send data on locakhost
        }
    })
    
});



app.listen("3000", function (req,resp) {
    
    console.log("server listen at 3000")
})