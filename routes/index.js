'use strict'

const models = require('../models/model')
const express = require('express')
const { response } = require('../app')

const router = express.Router()
module.exports = router

router.get('/locations', (req, res) => {
    res.status(200).json(models.listlocations())
})

router.post('/locations', (req, res) => {
    let { type, name,center } = req.body
    try {
        let agregarlocation = models.addlocations(type, name,center)
        res.status(201).json({ msg: agregarlocation })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al agregar usuario',
            error
        })
    }
})
