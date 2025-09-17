const express = require('express');
const logger = require('./helpers/loghelper');
const db = require('./db/models');
require('dotenv').config();

// Initialize Express app
const app = express();
app.use(express.json());

// Basic route
app.get('/', async (req, res) => {
  let users = await db.User.findAll();
  res.json(({
    success:true,
    data:users
  }));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
