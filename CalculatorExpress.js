var express = require('express');
var a=require('./routes/calculator');
var app = express();

app.get('/add/:param1/:param2', function(req, res) {
 res.send("Addition   :" + a.sum(parseInt(req.params.param1),parseInt(req.params.param2)));
});


app.get('/sub/:param1/:param2', function(req, res) {
 res.send("Substraction   :" + a.sub(parseInt(req.params.param1),parseInt(req.params.param2)));
});


app.get('/mul/:param1/:param2', function(req, res) {
 res.send("Multiplication   :" + a.mul(parseInt(req.params.param1),parseInt(req.params.param2)));
});


app.get('/div/:param1/:param2', function(req, res) {
 res.send("Division   :" + a.div(parseInt(req.params.param1),parseInt(req.params.param2)));
});


var server = app.listen(8080, function () {

 var host = server.address().address
 var port = server.address().port

 console.log("Example app listening at http://%s:%s", host, port)

})
