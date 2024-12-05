const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const CategorizationFormRoutes = require('./routes/CategorizationFormRoutes');
const clozeRoutes = require('./routes/ClozeFormSchemaRoutes');
const comprehensionRoutes = require('./routes/comprehensionRoutes');
const errorHandler = require('./errorHandler');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Separate connections for local and Atlas databases
const localConnection = mongoose.createConnection(process.env.MONGO_URI);

const atlasConnection = mongoose.createConnection(process.env.ATLAS_URI,);

// Handle Local MongoDB Connection
localConnection
  .on('connected', () => console.log('Local MongoDB connected'))
  .on('error', (err) =>
    console.error('Local MongoDB connection failed:', err.message)
  );

// Handle MongoDB Atlas Connection
atlasConnection
  .on('connected', () => console.log('MongoDB Atlas connected'))
  .on('error', (err) =>
    console.error('MongoDB Atlas connection failed:', err.message)
  );

app.use('/categorization', CategorizationFormRoutes);
app.use('/cloze', clozeRoutes);
app.use('/comprehension', comprehensionRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
