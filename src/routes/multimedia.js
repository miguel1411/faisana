const express = require('express');
const router = express.Router();
const {
  Restaurant,
  Multimedia,
  Product,
} = require('../../models');

router.get('/getallrestaurants', async (req,res, next) => {
  try {
    const request = await Restaurant.findAll();
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

router.get('/getAllProductImg/:productId', async(req, res, next) => {
  try {
    const { productId } = req.params;
    const request = await Product.findAll({
      where: {
        id : productId,
      },
      include: ['Multimedia']
    });
    if (request) {
      return res.status(200).send(request);
    }
    return res.status(400).send('error en la solicitud');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
