import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {readdirSync} from 'fs';

const morgan = require('morgan');
require('dotenv').config();
const app = express();

//DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log("DB Connection error : ", err));

//Middlewares
app.use(cors({
    origin: ['http://localhost:3000'],
}));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(morgan('dev'));


const port = process.env.PORT || 8000;
readdirSync("./routes").map((file) => app.use("/api", require(`./routes/${file}`)))
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});