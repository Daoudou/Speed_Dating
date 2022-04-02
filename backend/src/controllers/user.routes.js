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
  body('firstName').notEmpty(),
  body('lastName').notEmpty(),
  body('password').notEmpty().isLength({ min: 5 }),
  async (req, res) => {
      validateBody(req);
      const jane = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
      });
    console.log(jane.id);
    res.status(201).end();
  }
);

router.put('/:id', async (req, res) => {
  await User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
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
