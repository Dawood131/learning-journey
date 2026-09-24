const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative'],
  },
  stock: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ['Electronics', 'Clothing', 'Food', 'Other'], 
  },
});

const Products = mongoose.model('Products', productSchema);
module.exports = Products;
