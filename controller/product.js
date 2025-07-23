const fs = require('fs');
 const model = require('../model/product');
const mongoose = require('mongoose');

 const Product = model.Product; 

 exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save(); // use await here
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to save product", details: err.message });
  }
};


exports.getAllProduct= async (req,res)=>{
    const products= await Product.find({price: {$lt: 200}});
    res.json(products);
}

exports.readProduct=async (req,res)=>{
    const id = req.params.id;
    const product = await Product.findById((id));


    res.json(product);
}

exports.replaceProduct=async(req,res)=>{
    const id = req.params.id;
    const doc= await Product.findOneAndReplace({_id: id},req.body, {new: true});


     res.status(201).json(doc);
   
}

exports.updateProduct=async (req,res)=>{
    const id = req.params.id;
    const doc= await Product.findOneAndReplace({_id: id},req.body, {new: true});



     res.status(201).json(doc);
   
}

exports.deleteProduct=(req,res)=>{
    const id = +req.params.id;

    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(201).json(product);
   
}