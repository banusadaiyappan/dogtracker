var express = require('express');
var Sensor = require('../Models/Sensordata');
var Router = express.Router();

Router.get('/getdata', function (req, res) {
	//res.send('lala');
	console.log(req.query);
	//let tempsensor = 'x1-x10';
	var newSensor = new Sensor(req.query);
	newSensor.save(function (err, user) {
		if (err) {
			//console.log(err)
			res.send(err);
		} else {
			//console.log(user);
			res.send(user);
			
		}
	});

});

Router.post('/i/getdata', function (req, res) {
	//res.send({ success: true});
	//console.log(req.body)
	
	var tempdata = req.body;
	
	
		Sensor.insertMany(tempdata,function (err, sensor) {
			if (err) {
				res.send({success:false,message:"error based on original error",error:err});
			}
			else{
				res.send({success:true,message:"saved successfully",data:sensor});

			}
		});
		
		
	
	}
   
);


module.exports = Router;