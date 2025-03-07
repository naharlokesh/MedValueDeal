const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  Medicine_name: {
    type:String,
    required:[true,'required'],
    trim:true,
  },
  Company_name: {
    type:String,
    required:[true,'required'],
    trim:true,
  },
  Quantity: {
    type:String,
    required:[true,'required'],
    trim:true,
  }, // If this is meant to be a numeric value, consider changing this to Number
  Price: {
    type:Number,
    required:[true,'required'],
    trim:true,
  },
  Medicine_image: {
    type:String,
    required:[true,'required'],
    trim:true,
  }, // Assuming you'll store an image URL or file path. Use Buffer if storing the image directly in the database
});

// Then, to use this schema, you must convert it into a model you can work with
const Medicine = mongoose.model('Medicine', MedicineSchema);

module.exports = Medicine; // Export the model so it can be used in other parts of your application
