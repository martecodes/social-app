import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoute from './routes/posts.js'


const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoute);

const CONNECTION_URL = 'mongodb+srv://user7:user717@database.u50ruxf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log("server running on port "+PORT)))
.catch((err) => console.log(err))
