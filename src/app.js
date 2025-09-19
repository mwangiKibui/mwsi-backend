const express = require('express');
const logger = require('./helpers/loghelper');
const {authRoutes,employeeRoutes} = require('./routes');
require('dotenv').config();

// Initialize Express app
const app = express();
app.use(express.json());

// Health route
app.get('/health', async (req, res) => {
  return res.json({ status: 'OK', timestamp: new Date() });
});

// Auth routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/employees',employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
