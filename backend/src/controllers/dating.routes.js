const express = require('express');
const router = express.Router();
const Dating = require('../models/dating.model')
const {body} = require('express-validator');
const {validateBody} = require("./validation/route.validator");
const jwtdecode = require('jwt-decode')
const infos = require('../models/infos.model')
const jwt = require("jsonwebtoken");

router.get('/', async (req, res) => {
    const dating = await Dating.findAll()
    console.log(dating.every(user => user instanceof Dating))
    res.send(dating)
})



router.post('/datingAdd', async (req, res) => {

    try {
        //validateBody(req)
        const token = jwtdecode(req.headers.authorization)
        console.log(token.id)
        const dating = await Dating.create({
            dateDating: req.body.dateDating,
            comment: req.body.comment,
            note: parseInt(req.body.note),
            UserId: token.id,
            InfoId: req.body.InfoId
        })
        res.status(201).send('Infos de la rencontre ajouter').end()
    } catch (e) {
        console.error(e)
        return {error: 'Erreur lors des infos sur les rencontres'}
    }
})

router.delete('/deleteDate/:id',async (req,res)=>{
    try {
        const datingDelete = await Dating.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).send('Date supprimer').end()
    }catch (e) {
        console.error(e)
        return {error: 'Delete Date error'}
    }
})

exports.initializeRoutes = () => router;