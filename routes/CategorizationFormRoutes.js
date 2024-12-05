const express = require('express');
const router = express.Router();
const cors = require('cors');
const CategorizationForm = require('../models/CategorizationFormSchema');
router.use(cors());
// POST route to save form data
router.post('/submit-form', async (req, res) => {
  const { title, media, categories, items, points } = req.body;

  try {
    const newForm = new CategorizationForm({
      title,
      media,
      categories,
      items,
      points,
    });

    await newForm.save();
    res.status(201).json({ message: 'Form saved successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save form', error });
  }
});

// GET route to fetch all form data
router.get('/fetch-forms', async (req, res) => {
  try {
    const forms = await CategorizationForm.find(); // Fetch all forms
    res.status(200).json({ message: 'Forms fetched successfully', data: forms });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch forms', error });
  }
});

// GET route to fetch categories
router.get('/fetch-categories', async (req, res) => {
  try {
    const categories = await CategorizationForm.distinct('categories'); // Get distinct categories
    res.status(200).json({ message: 'Categories fetched successfully', data: categories });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories', error });
  }
});

module.exports = router;
