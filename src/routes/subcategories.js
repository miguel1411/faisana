const { request } = require('express');
const express = require('express');
const router = express.Router();
const { QueryTypes, where } = require('sequelize');
const { Op } = require("sequelize");


const {
  Product,
  Multimedia,
  Category,
  Restaurant,
  Subcategories,
  SubcategoriesInRestaurant,
  sequelize
} = require('../../models');
const product = require('../../models/product');

router.get('/getAllsubcategories/:restaurantId/:categoryId', async(req, res, next) => {
  try {
    const { restaurantId, categoryId } = req.params;
    const request = await Product.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('Product.id')), 'totalProducts'],
      ],
      where : {
        restaurantId,
        categoryId,
      },
      include: ['Category', 'Restaurant', 'Subcategory'],
      group: "Subcategory.name",
    });
    console.log(request);
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
