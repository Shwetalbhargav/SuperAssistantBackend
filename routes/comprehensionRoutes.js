const express = require('express');
const router = express.Router();
const cors = require('cors');
const Comprehension = require('../models/Comprehension');

router.use(cors());
router.post('/add', async (req, res) => {
  try {
    const { comprehensionText, questions } = req.body;

   
    const comprehension = new Comprehension({
      comprehensionText,
      questions,
    });

    await comprehension.save();
    res.status(201).json({ message: 'Comprehension created successfully', data: comprehension });
  } catch (err) {
    res.status(400).json({ error: 'Error creating comprehension', details: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const comprehensions = await Comprehension.find();
    res.status(200).json(comprehensions);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comprehensions', details: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const comprehension = await Comprehension.findById(req.params.id);
    if (!comprehension) {
      return res.status(404).json({ error: 'Comprehension not found' });
    }
    res.status(200).json(comprehension);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comprehension', details: err.message });
  }
});

module.exports = router;
