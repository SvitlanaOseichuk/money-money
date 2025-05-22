import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.static('public'));

app.get('/api/currencies', async (req, res) => {

  const myApiKey = process.env.API_KEY; 
  const URL = `https://v6.exchangerate-api.com/v6/${myApiKey}/latest/EUR`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.result === 'success') {
      res.json(data.conversion_rates);
    } else {
      res.status(500).json({ error: 'Error fetching currency data' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


app.get('/api/convert', async (req, res) => {
  const myApiKey = process.env.API_KEY; 
  const { from, to, amount } = req.query; 

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/latest/${from}`);
    const data = await response.json();

    if (data.result === 'success') {
      const rate = data.conversion_rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      res.json({ convertedAmount });
    } else {
      res.status(500).json({ error: 'Error fetching exchange rate' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
