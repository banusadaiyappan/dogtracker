var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var dbDetails= require('./config/db');
var path = require('path');

var app = express();
mongoose.connect(dbDetails.dbUrl, { useNewUrlParser: true ,useUnifiedTopology: true},(err,success)=>{
    if(err){
        console.log('error occured');
        console.log(err);
    }else{
        console.log('db connected successfully');
    }
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

app.use('/myapp', express.static(path.join(__dirname, 'public')));

app.use('/api',require('./routes/api'));
app.listen(dbDetails.port,(err,success)=>{
    if(err) throw err;
    else console.log('server is runningin port 3000');
});