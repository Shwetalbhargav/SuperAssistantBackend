const express = require('express');
const router = express.Router();
const cors = require('cors');
const ClozeFormSchema = require('../models/ClozeFormSchema');
router.use(cors());
router.post('/add-form', async (req, res) => {
    const { question, options, points } = req.body;
  
    try {
      const form = new ClozeFormSchema({
        question,
        options,
        points
      });
  
      const savedForm = await form.save();
      res.status(201).json(savedForm);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.get('/forms', async (req, res) => {
    try {
      const forms = await ClozeFormSchema.find();
      res.status(200).json(forms);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;