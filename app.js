const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
    
});