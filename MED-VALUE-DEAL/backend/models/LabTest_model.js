const mongoose = require('mongoose');

const LabTestSchema = new mongoose.Schema({
  Test_name: {
    type:String,
    required:[true,'required'],
    trim:true,
  },
  Available_at: {
    type:Number,
    required:[true,'required'],
    trim:true,
  },
  Test_Count: {
    type:Number,
    required:[true,'required'],
    trim:true,
  }, // If this is meant to be a numeric value, consider changing this to Number
  Price: {
    type:Number,
    required:[true,'required'],
    trim:true,
  }
});

// Then, to use this schema, you must convert it into a model you can work with
const LabTest = mongoose.model('LabTest', LabTestSchema);

module.exports = LabTest; // Export the model so it can be used in other parts of your application
