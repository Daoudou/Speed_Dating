const express = require('express');
const router = express.Router();
const { validateBody } = require('./validation/route.validator');
const User = require('../models/user.model')

router.get('/infos', async(req,res)=>{
    const infos = await User.findAll()
    console.log(infos.every(info => info instanceof Infos))
    res.send(infos)
})

router.post(
    '/infosAdd',
    async (req,res)=>{
        validateBody(req)
        const infosUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sexe: req.body.sexe,
            birthdate: Date.parse(req.body.birthdate)
        })
        console.log(infosUser.id)
        res.status(201).end()
    })

exports.initializeRoutes = () => router;