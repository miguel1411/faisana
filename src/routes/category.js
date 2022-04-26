const express = require('express');
const router = express.Router();
const {
  Product,
  sequelize,
} = require('../../models');

router.get('/getallCategory/:restaurantId', async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const request = await Product.findAll({
      where : {
        restaurantId,
      },
      include: ['Category', 'Restaurant'],
      group: "Category.name",
    });
    return res.status(200).send(request);
  } catch (error) {
    next(error);
  }
});

// router.post('/addCategory/', async(req, res, next) => {
//   try {
//     const { name, street, status } = req.body;
//     const request = await Category.create({
//       name,
//       street,
//       status
//     });
//     if(request) {
//       return res.status(204).send(request);
//     }
//     return res.status(304).send(request);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
