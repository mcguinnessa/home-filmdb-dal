

const mongoose = require('mongoose');

const data_schema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  bluray: { type: Boolean, required: false },
  dvd: { type: Boolean, required: false },
  file: { type: Boolean, required: false }
},{ collection : "owned" }
  )

//module.exports = mongoose.model('Data', data_schema)
module.exports = mongoose.model('owned', data_schema)
