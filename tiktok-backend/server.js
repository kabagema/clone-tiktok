import express from "express";
import mongoose from "mongoose";
import Data from './data.js';
// app config
const app = express();
const port = 9000;

//middlewares


//db config

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get('/v1/posts', (req, res) => res.status(200).send(Data))


// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
