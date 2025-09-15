import express from 'express';
import connectionDB from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

const PORT = 8000;


connectionDB();

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`)
});