'use strict'

const models = require('../models/model')
const express = require('express')
const { response } = require('../app')

const router = express.Router()
module.exports = router

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan


router.get('/users', (req, res) => {
    res.status(200).json(models.listUsers())
})

router.post('/users', (req, res) => {
    let { email, name } = req.body
    try {
        let agregarusuario = models.addUser(email, name)
        res.status(201).json({ msg: agregarusuario })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.patch("/users/plan", (req, res) => {
    let { user } = req.query
    try {
        const resultado = models.switchPlan(user)
        res.json({ msg: resultado })
    }
    catch (error) { res.status(404).json({ error: error.message }) }
})

router.get("/series", (req, res) => {
    res.status(200).send(models.listSeries())
})

router.post("/series", (req, res) => {
    let { name, seasons, category, year } = req.body
    try {
        let agregarserie = models.addSerie(name, seasons, category, year)
        res.status(201).json({ msg: agregarserie })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/series/:category', (req, res) => {
    let { category } = req.params
    try {
        let series = models.listSeries(category)
        res.status(200).json(series)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.get('/play/:serie', (req, res) => {
    let { serie } = req.params
    let { user } = req.query
    try {
        let play = models.play(serie, user)
        res.status(200).json({ msg: play })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.get('/watchAgain', (req, res) => {
    let { user } = req.query
    try {
        let seriesvistas = models.watchAgain(user)
        res.status(200).json(seriesvistas)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.post('/rating/:serie', (req, res) => {
    let { serie } = req.params
    let { email, score } = req.body
    try {
        let rating = models.rateSerie(serie,email, score)
        res.status(200).json({ msg:rating })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})



// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.