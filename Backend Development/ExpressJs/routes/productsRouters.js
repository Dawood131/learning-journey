const express = require('express');
const productsControler = require('../controllers/productsController');
const router = express.Router();

router
  .route('/')
  .get(productsControler.getAllProducts)
  .post(productsControler.createProduct);

router
  .route('/:id')
  .get(productsControler.getProduct)
  .patch(productsControler.updateProduct)
  .delete(productsControler.deleteProduct);

module.exports = router;
