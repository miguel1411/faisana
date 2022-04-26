const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');

const {
  Product,
  sequelize
} = require('../../models');

// Función para obtener todos los productos de determinado restaurante y determinada categoria
router.get('/getAllProduct/:restaurantId/:categoryId/:subcategoryId', async (req,res, next) => {
  try {
    const { restaurantId, categoryId, subcategoryId } = req.params;
    const request = await Product.findAll({
      where: {
        restaurantId,
        categoryId,
        subcategoryId
      },
    });
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

// Función para obtener un producto de determinado restaurante y determinada categoria
router.get('/getProduct/:restaurantId/:categoryId/:productoId', async (req,res, next) => {
  try {
    const { restaurantId, categoryId, productoId } = req.params;
    const request = await Product.findOne({
      where: {
        restaurantId,
        categoryId,
        id: productoId,
      },
    });
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

// Función para obtener la cantidad de productos totales por categoría
router.get('/getCountProducts/:categoryId', async(req, res, next) => {
  try {
    const { categoryId } = req.params;
    const request = await sequelize.query(
      `SELECT count(*) as totalProductos FROM Products WHERE Products.categoryId = ${categoryId}`,
      { type: QueryTypes.SELECT }
    );
    return res.status(200).send(request);
  } catch(err) {
    next(err);
  }
});

module.exports = router;
