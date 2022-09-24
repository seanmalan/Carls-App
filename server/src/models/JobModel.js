const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  title: {type:String, required: true},
  clientName: {type:String, required: true},
  location: {type:String, required: true},
  description: {type:String, required: true},
  created_at: {type:Date},
  clientPhoneNumber: {type:String, required: true},
  jobStatus: {type:String, required: true},
  userId: {type: String, required: true},
  jobNotes: {type: Array, required: false},
  jobDate: {type: Date, required: true},
});

module.exports = mongoose.model('Job', JobSchema);