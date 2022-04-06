const express = require('express');
const router = express.Router();
const { validateBody } = require('./validation/route.validator');
const Infos = require('../models/infos.model')
const {body} = require('express-validator');

router.get('/infos', async(req,res)=>{
    const infos = await Infos.findAll()
    console.log(infos.every(info => info instanceof Infos))
    res.send(infos)
})

router.post('/infosAdd',body('firstName'),body('lastName'),body('sexe'),async (req,res)=>{
    try {
        validateBody(req)
        const infos = await Infos.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sexe: req.body.sexe
        })
        console.log(infos.id)
        res.status(201).send('Infos ajouter avec succe').end()
    }catch (e) {
        console.error(e)
        return {error : "Echec lors de l'ajout"}
    }
})



exports.initializeRoutes = () => router;