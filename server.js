var express = require("express");
const exphbs = require('express-handlebars');
var path = require("path");

var app = express();

app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    defaultLayout: "main"
}));

app.set('view engine', '.hbs');

app.use(express.static(__dirname + "/public"));


// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    var employees = [
        {
            name: "John",
            age: 23,
            occupation: "developer",
            company: "Scotiabank",
            visible: true
        },
        {
            name: "Frank",
            age: 40,
            occupation: "Project Manager",
            company: "RBC",
            visible: false
        },
        {
            name: "Jane",
            age: 33,
            occupation: "Manager",
            company: "RBC",
            visible: true
        }
    ];

    res.render("home", {
        employees,
        title: "Home Page"
    });
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.render("about", {
        title: "About Page"
    });
});




var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);