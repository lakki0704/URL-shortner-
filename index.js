const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


var shortUrl = require('node-url-shortener');

let short = "";

// shortUrl.short('https://docs.google.com/document/d/13iYBDVGE9iOMYFuyKflaW1FESh5PmquBVSJVGSbZnVk/edit', function(err, url) {
//     console.log(url);
// });

app.get("/", function(req, res) {
    res.render("home.ejs", { shortend: short });

});



app.post("/urlhome", function(req, res) {
    const urlinput = req.body.urlname;
    shortUrl.short(urlinput, function(err, url) {
        // console.log(url);
        short = url;
        console.log(short);
        res.redirect("/");
    });

});



app.listen(3000, function() {
    console.log("Server started on port 3000");
});