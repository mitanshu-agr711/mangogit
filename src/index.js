import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.db.js';
// import { router } from './routes.js';

const app = express();


app.use(cors());

const port = process.env.PORT||8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.get('/', (req, res) => {
  res.send('Assignment.');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 