
const express = require ('express');
const morgan= require('morgan');
const { create } = require('domain');

//const productController= require('./controller/product.js');


const server = express(); 
//const productRouter = express.Router();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


//
//MVC MODEL VIEW CONTROLLER

//Create API  /products
//hello


 
 server.listen(8080,()=>{
    console.log('server started')
 } )
  