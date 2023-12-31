import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All origins with default of cors(*)
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Main Page')
});

app.use('/books', booksRoute);

mongoose 
   .connect(mongoDBURL)
   .then(() => {
    console.log('App connected to databse');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
   })
   .catch((error) => {
    console.log('Error connecting to database:',error);
   });
