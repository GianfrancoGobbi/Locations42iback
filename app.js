'use strict'
const express = require('express')
const app = express()
const cors = require("cors")
const router = require('./routes')

app.use(cors({ origin: 'https://42i.netlify.app' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://42i.netlify.app'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(express.json())
app.use(router)

module.exports = app
