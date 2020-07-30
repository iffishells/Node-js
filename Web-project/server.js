
const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const ejsLint = require('ejs-lint');

app.use(express.static(path.join(__dirname, 'public'))); //static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set("view engine", "ejs") // for setting to ejs tempalte



app.get("/" , function (req , resp) {
  resp.send("BisMillah")

});


app.post("/", function(req, resp) {
  console.log("post method has been called");
  resp.send("Okies")
});


app.listen(3000, function(req, resp) {
  console.log("your's  is listen at 3000 ports");
})
