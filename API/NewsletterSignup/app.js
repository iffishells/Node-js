const express =  require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
// public when we load the file on the localhost 
// tha these static file would not upload there
// thats why we move to these file in the public folder
// and set the path according to this like public -> css ->style.css

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function (req , res){
    res.sendfile(__dirname  + "/index.html")
});



app.post("/" ,function(req, resp)
{
    var firstName = req.body.fname;
    var lastName =  req.body.lname;

    var userEmail = req.body.email;
    
    console.log(firstName , lastName ,userEmail )
    
    // https request data
    const mcData = {
       members: [
           {
               email : userEmail,
               status : 'pending'
           }

        ]
    }
    const mcDataPost = JSON.stringify(mcData);

    const options = {
        url : '',
        method : 'POST',
        headers : {
            Authorization : 'auth..'
        }


    } 
    request(options , function(errors,resp,body){

    })
    // console.log(fname ,lname , email)
    
})
app.listen(3000 , function(req,resp){

    console.log("server is running at the 3000 port")
    
})



// API KEYS 
// 521b31700bd61bfa7694ee58bc84a45d-us18


// list id 
// a27064f2f3