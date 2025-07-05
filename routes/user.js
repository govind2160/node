const userController = require('../controller/user');
const express = require('express');
const router = express.Router();


router
.post('/',userController.createProduct)
.get('/',userController.getAllProduct)
.get('/:id',userController.readProduct)
.put('/:id',userController.replaceProduct)
.patch('/:id',userController.updateProduct)
.delete('/:id',userController.deleteProduct);

exports.router = router;