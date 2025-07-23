const mongoose = require('mongoose');
const {Schema} = mongoose;


const productschema = new Schema({

   
      title: {type:String, required:true, unique:true},
      description: String,
      category: String,
      price: Number,
      discountPercentage:{type: Number, min:[0,'wrong min discount'] , max: [50,'wrong max discount']  },
      rating: {type: Number, min:[0,'wrong min rating'] , max: [5,'wrong max rating']  },
      stock: Number
 
  
});

exports.Product = mongoose.model('Product', productschema);
