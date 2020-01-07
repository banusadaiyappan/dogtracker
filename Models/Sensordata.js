var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SensorSchema = new Schema(
    {
        temperaure: { type: String},
        "x1-x10": { type: String },
        "y1-y10": {type: String},
        "z1-z10" :{type: String}
        
  
    });

module.exports = mongoose.model('sensor', SensorSchema);
