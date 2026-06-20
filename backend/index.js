import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, Welcome to my server V.1.2');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});