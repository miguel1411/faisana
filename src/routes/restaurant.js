const express = require('express');
const router = express.Router();
const {
  Restaurant
} = require('../../models');

router.get('/getallrestaurants', async (req, res, next) => {
  try {
    const request = await Restaurant.findAll();
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

router.post('/addRestaurant/', async(req, res, next) => {
  try {
    const { name, street, status } = req.body;
    const request = await Restaurant.create({
      name,
      street,
      status
    });
    if(request) {
      return res.status(204).send(request);
    }
    return res.status(304).send(request);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
