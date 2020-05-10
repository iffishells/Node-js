const express =  require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function (req , resp){
    resp.sendfile(__dirname  + "/index.html")
});

app.post("/" ,function(req, resp)
{
    var fname =  req.bodyParser.fname
    console.log(data)
    var lname =  req.bodyParser.lname;
    console.log(lname);

    var email =  req.bodyParser.email;

    console.log(email)
    
})
app.listen(3000 , function(req,resp){

    console.log("server is running at the 3000 port")
    
})