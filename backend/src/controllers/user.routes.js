const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const {validateBody} = require('./validation/route.validator');
const User = require('.././models/user.model')
var bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
var salt = bcrypt.genSaltSync(12)


router.get('/', async (req, res) => {
    const users = await User.findAll()
    console.log(users.every(user => user instanceof User))
    res.send(users)
});

router.get('/:firstName', async (req, res) => {
    const foundUser = await User.findAll({
        where: {
            firstName: req.params.firstName
        }
    })
    if (!foundUser) {
        throw new Error('User not found');
    }
    res.send(foundUser);
});

router.post('/login', body('email').notEmpty(), body('password').notEmpty(), async (req, res) => {

    try {
        validateBody(req)
        const userLogin = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!userLogin) {
            throw new Error('User not found')
        }

        const passwordVALID = bcrypt.compareSync(req.body.password, userLogin.password)
        if (passwordVALID) {
            const token = jwt.sign(
                {id: userLogin.id, email: userLogin.email, password: userLogin.password},
                'abcdefghijklmnoqrstuvxyzABSCDEFGHIJKLMNOPQRSTUVWXYZ'
            )
            res.send(token)
            console.log(token)

        } else {
            res.status(400).send('password invalid')
        }
    }catch (e) {
        console.error(e)
        return {error: 'Login erreur'}
    }

})

router.post(
    '/create',
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('pseudo').notEmpty().isLength({min: 4}),
    body('email').notEmpty(),
    body('password').notEmpty().isLength({min: 5}),
    body('sexe').notEmpty(),
    body('birthdate').notEmpty(),
    async (req, res) => {
        try {
            validateBody(req);
            const utilisateur = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
                sexe: req.body.sexe,
                birthdate: req.body.birthdate,
                roles: 'MEMBER'
            });
            console.log(utilisateur.id);
            res.status(201).send('Utilisateur creer').end();
        } catch (e) {
            console.error(e)
            return {error: "Echec de la creation de l'utilisateur"}
        }
    }
);

router.put('/:id', async (req, res) => {
    await User.update({
        pseudo: req.body.pseudo,
        password: req.body.password,
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(204).end();
});

router.delete('/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(204).end();
});

exports.initializeRoutes = () => router;
