const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const useExtractors = require('../utils/jwtUtils');
const { comparePassword } = require('../utils/bcryptService')

const {
  Restaurant,
  Multimedia,
  Product,
  User,
} = require('../../models');
const { json } = require('express/lib/response');

router.post('/login', async (req, res, next) => {
  try {
    const { body } = req;
    const { email, password } = body;

    const user = await User.findOne({
      where: { email: email}
    });
    const isCorrect = await comparePassword(password, user.password);
    if (isCorrect) {
      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
      const request = jwt.sign({payload}, process.env.TOKEN_SECRET);
      if (request) {
        return res.status(200).send({token: request});
      }
    }
    return res.status(304);
  } catch (error) {
    next(error);
  }
});

router.post('/restaurant', useExtractors, (req, res, next) => {
  console.log(req)
  res.json({mes: 'hello world'})
});

module.exports = router;
