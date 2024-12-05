const mongoose = require('mongoose');


const CategorizationFormSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  media: {
    type: String, 
    default: null,
  },
  categories: [
    {
      type: String,
      required: true, 
    },
  ],
  items: [
    {
      name: { type: String, required: true },
      belongsTo: { type: String, required: true }, 
    },
  ],
  points: {
    type: Number, 
    default: 0,
  },
});

module.exports = mongoose.model('CategorizationForm', CategorizationFormSchema);
