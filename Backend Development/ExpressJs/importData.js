const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ quiet: true });
const Products = require('./models/productModel');

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Products.create(products);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('DB connected for import');
  importData();  
});