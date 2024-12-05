const mongoose = require('mongoose');


const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true }, 
  isCorrect: { type: Boolean, required: true }, 
});


const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true }, 
  options: { type: [OptionSchema], required: true }, 
  points: { type: Number, required: true }, 
});

const ComprehensionSchema = new mongoose.Schema({
  comprehensionText: { type: String, required: true }, 
  questions: { type: [QuestionSchema], required: true }, 
});

const Comprehension = mongoose.model('Comprehension', ComprehensionSchema);

module.exports = Comprehension;
