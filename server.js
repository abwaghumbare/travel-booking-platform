require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: '🚀 Travel Booking Platform is running!'
  });
});

app.get('/api', (req, res) => {
  res.json({
    name: 'Travel Booking Platform API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      health: '/health',
      test: '/api/test'
    }
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: '✅ API is working!',
    timestamp: new Date().toISOString()
  });
});

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
