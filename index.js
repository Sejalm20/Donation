const path = require("path");
const express = require("express");
const razorPay = require("razorpay")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// to send html and css file together, we created a public folder with index.html and styles.css file in it
const staticPath = path.join(__dirname, "public");

// builtin middleware
app.use(express.static(staticPath));


app.get("/", function(req, res){
    res.send("hello");
});

app.listen(3000, function(){
  console.log("Server has started on 3000!");
});
