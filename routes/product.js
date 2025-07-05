const productController = require('../controller/product');
const express = require('express');
const router = express.Router();


router
.post('/',productController.createProduct)
.get('/',productController.getAllProduct)
.get('/:id',productController.readProduct)
.put('/:id',productController.replaceProduct)
.patch('/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct);

exports.router = router;