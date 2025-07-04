const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));

const products= data.products;




const express = require ('express');
const morgan= require('morgan');

const server = express(); 

server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));




 
//API - EndPoint-Route





//Create API  /products

server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body) 
})


//Products API READ
server.get('/products',(req,res)=>{
    
    res.json(products);
})
server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = products.find(p => p.id === id);

    res.json(product);
})


//Update API    PUT API


server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id});
    res.status(201).json();
})







server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
// server.patch('/',auth,(req,res)=>{
//     res.json({type:'PATCH'})

// })








server.get('/demo',(req,res)=>{
    //res.json(products)
    //res.sendStatus(404); 

   // res.send('<h1>hello</h1>')
//    res.sendFile('C:\Users\govin\Desktop\node\index.html');

})





 
 server.listen(8080,()=>{
    console.log('server started')
 } )
  