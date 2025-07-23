require('dotenv').config();
const express = require ('express');
const morgan= require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const { create } = require('domain');
console.log('env',process.env.DB_PASSWORD);

//const productController= require('./controller/product.js');
// db connection code
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL.replace('<db_password>', process.env.DB_PASSWORD));
  console.log('Connected to MongoDB');
}
//schema



const server = express(); 
//const productRouter = express.Router();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



server.use(cors());

server.use(express.json());
server.use(morgan('combined'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);
// server.use('*', (req, res) => {
// res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });




 
 server.listen(process.env.PORT,()=>{
    console.log('server started')
 } )
  