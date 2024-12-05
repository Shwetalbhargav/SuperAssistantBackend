const mongoose = require('mongoose');

const ClozeFormSchemaformSchema = new mongoose.Schema({
    question: { type: String, required: true }, 
    options: [{ text: String, correct: Boolean }], 
    points: { type: Number, default: 0 } 
  });

  module.exports = mongoose.model('ClozeFormSchema', ClozeFormSchemaformSchema);