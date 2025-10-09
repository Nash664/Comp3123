const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

dotenv.config();

const DB_URL =  process.env.DB_URL;
const PORT = 8081;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send('<h1>Welcome to Note taking application - Week06 Exercise</h1>');
});

app.use('/api', noteRoutes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Could not connect to MongoDB', err);
    process.exit(1);
  });
