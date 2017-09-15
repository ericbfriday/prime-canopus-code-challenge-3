var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var indexModule = require('./modules/indexModule');
var petShopModule = require('./routes/petShopModule');


app.use('/', indexModule);

app.use('/petShop', petShopModule);

app.use(express.static('server/public'));


app.listen(port, function(){
    console.log('listening on port', port);
});