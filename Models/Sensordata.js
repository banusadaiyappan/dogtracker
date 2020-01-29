var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SensorSchema = new Schema(
    {
        temperaure: { type: String},
        x: { type: String },
        y: {type: String},
        z :{type: String}
        
  
    });

module.exports = mongoose.model('sensor', SensorSchema);
