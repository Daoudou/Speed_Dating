const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { validateBody } = require('./validation/route.validator');
const User = require('.././models/user.model')


router.get('/', async (req, res) => {
    const users = await User.findAll()
    console.log(users.every(user => user instanceof User))
    res.send(users)
});

router.get('/:firstName', async (req, res) => {
  const foundUser = await User.findAll({
      where:{
        firstName: req.params.firstName
      }
  })
  if (!foundUser) {
    throw new Error('User not found');
  }
  res.send(foundUser);
});

router.post(
  '/',
  body('pseudo').notEmpty().isLength({min: 4}),
  body('email').notEmpty(),
  body('password').notEmpty().isLength({ min: 5 }),
  async (req, res) => {
      validateBody(req);
      const utilisateur = await User.create({
          pseudo: req.body.pseudo,
        password: req.body.password,
          email: req.body.email,
      });
    console.log(utilisateur.id);
    res.status(201).end();
  }
);

router.put('/:id', async (req, res) => {
  await User.update({
      pseudo: req.body.pseudo,
      password: req.body.password,
  }, {
      where:{
          id: req.params.id
      }
  })
  res.status(204).end();
});

router.delete('/:id', async (req, res) => {
  await User.destroy({
      where:{
          id: req.params.id
      }
  })
  res.status(204).end();
});

exports.initializeRoutes = () => router;
