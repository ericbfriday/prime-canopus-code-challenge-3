var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5280;

// app.use('/', indexModule);

// app.use('/petShop', petShopModule);

app.use(express.static('public'));


app.listen(port, function(){
    console.log('listening on port', port);
})