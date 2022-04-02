const express = require('express');
const router = express.Router();
const { validateBody } = require('./validation/route.validator');
const Infos = require('../models/infos.models')

router.get('/infos', async(req,res)=>{
    const infos = await Infos.findAll()
    console.log(infos.every(info => info instanceof Infos))
    res.send(infos)
})

router.post(
    '/infosAdd',
    async (req,res)=>{
        validateBody(req)
        const infosUser = await Infos.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sexe: req.body.sexe,
            birthdate: req.body.birthdate
        })
        console.log(infosUser.id)
        res.status(201).end()
    })

exports.initializeRoutes = () => router;