//require dependencies
const express = require('express');
const app = express();
const router = express.Router();
var routes = require('routes');



//define a route, usually this would be a bunch of routes imported from another file
app.get('/', function (req, res, next) {
    res.send('Welcome to the Kushy API');
});

//add routes to express app
routes(app);

//start Express server on defined port
app.listen(3000);

//log to console to let us know it's working
console.log('Vali`s API server started');