const express = require('express');
const cors = require('cors');
const campaignsRouter = require('../routes/campaign.js');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/campaigns', campaignsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
