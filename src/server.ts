import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
