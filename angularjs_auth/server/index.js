var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('VUgPIEeeZJUGytNg_a6vtY2o6zTc_Xqh7GqVuXgY3uYGrGRtLXTzKn-bcO-UtPT3', 'base64'),
    audience: 'qF6CKHkdc6sPCqrbhNcUFtaQ1NzM3NBK'
});

app.get('/api/public', function(req, res){
    res.json({
        message:"Hello from a public endpoint! You don't need to be authenticated to see this"
    })
});

app.get('/api/private', authCheck, function(req, res){
    res.json({
        message:"Hello from a private endpoint! You DO need to be authenticated to see this"
    })
});

app.listen(3001);
console.log('Listening on http://localhost:3001');