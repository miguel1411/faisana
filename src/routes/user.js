const express = require('express');
const router = express.Router();
const { passwordHash } = require('../utils/bcryptService');

const {
    User
} = require('../../models');

router.post('/createUser', async(req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;
    const hashPassword = await passwordHash(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      status: 1,
      password: hashPassword,
    });

    if (user) {
      return res.status(204).send('Usuario Creado');
    }
    return res.status(304);
  } catch (error) {
    next(error);
  }
});

module.exports = router;