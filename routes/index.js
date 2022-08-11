'use strict'

const models = require('../models/model')
const express = require('express')
const { response } = require('../app')

const router = express.Router()
module.exports = router

router.get('/locations', (req, res) => {
    res.status(200).json(models.listlocations())
})
