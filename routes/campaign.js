const express = require('express');
const router = express.Router();

// Mock campaign data
const campaignsData = [
  { name: 'Campaign A', impressions: 10000, clicks: 500, conversions: 50 },
  { name: 'Campaign B', impressions: 15000, clicks: 700, conversions: 60 },
  // Add more campaign data as needed
];

router.get('/', (req, res) => {
  res.json(campaignsData);
});

module.exports = router;
