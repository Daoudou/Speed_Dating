const express = require('express');
const router = express.Router();
const Dating = require('../models/dating.model')
const {body} = require('express-validator');
const {validateBody} = require("./validation/route.validator");


router.get('/',async (req,res)=>{
    const dating = await Dating.findAll()
    console.log(dating.every(user => user instanceof Dating))
    res.send(dating)
})

router.post('/datingAdd',async (req,res)=>{

    try {
        //validateBody(req)
        const dating =  await Dating.create({
            dateDating: req.body.dateDating,
            comment: req.body.comment,
            note: parseInt(req.body.note)
        })
        console.log(dating.id)
        res.status(201).send('Infos de la rencontre ajouter').end()
    }catch (e){
        console.error(e)
        return {error: 'Erreur lors des infos sur les rencontres'}
    }
})


exports.initializeRoutes = () => router;