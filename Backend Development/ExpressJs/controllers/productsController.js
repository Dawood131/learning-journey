const { json } = require('express');
const Products = require('../models/productModel');

// ============================================================
// GET /api/v1/products
// Supports: filtering, sorting, field limiting, pagination
//
// Example URLs you can test in Postman:
//   /api/v1/products
//   /api/v1/products?category=Clothing
//   /api/v1/products?price[gt]=1000
//   /api/v1/products?sort=price
//   /api/v1/products?sort=-price
//   /api/v1/products?fields=name,price
//   /api/v1/products?page=2&limit=3
//   /api/v1/products?category=Clothing&sort=-price&fields=name,price&page=1&limit=5
// ============================================================

exports.getAllProducts = async (req, res) => {
  try {
    // ----------------------------------------------------------
    // STEP 1: FILTERING
    // req.query holds EVERYTHING from the URL (filters, sort,
    // fields, page, limit — all mixed together). We only want the
    // filter-related parts here, so we remove the "special" keys
    // that are NOT filters (they're instructions for later steps).
    // ----------------------------------------------------------
    const queryObj = { ...req.query }; // shallow copy, so we don't mutate req.query directly
    const excludedFields = ['sort', 'fields', 'page', 'limit'];
    excludedFields.forEach((field) => delete queryObj[field]);

    // ----------------------------------------------------------
    // STEP 2: ADVANCED FILTERING (gt, gte, lt, lte -> $gt, $gte, $lt, $lte)
    // URL sends: price[gt]=1000  ->  req.query becomes { price: { gt: "1000" } }
    // MongoDB needs: { price: { $gt: 1000 } }  (with $ sign, and a real Number)
    // ----------------------------------------------------------
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    const filterObj = JSON.parse(queryStr);

    // Convert the operator values from string -> number
    // (URL query params are ALWAYS strings, MongoDB needs real numbers to compare)
    Object.keys(filterObj).forEach((key) => {
      if (typeof filterObj[key] === 'object' && filterObj[key] !== null) {
        Object.keys(filterObj[key]).forEach((operator) => {
          filterObj[key][operator] = Number(filterObj[key][operator]);
        });
      }
    });

    // Start building the query (NOT awaited yet — we keep chaining onto it)
    let query = Products.find(filterObj);

    // ----------------------------------------------------------
    // STEP 3: SORTING
    // ?sort=price        -> ascending  (cheap to expensive)
    // ?sort=-price        -> descending (expensive to cheap)
    // ?sort=price,stock   -> sort by price first, then stock as tiebreaker
    //                        (Mongoose wants "price stock" — space separated)
    // ----------------------------------------------------------
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt'); // default: newest first (if you add timestamps later)
    }

    // ----------------------------------------------------------
    // STEP 4: FIELD LIMITING (projection)
    // ?fields=name,price   -> only return these fields, hide the rest
    // ?fields=-price        -> return everything EXCEPT price
    // ----------------------------------------------------------
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v'); // by default, hide Mongoose's internal __v field
    }

    // ----------------------------------------------------------
    // STEP 5: PAGINATION
    // ?page=2&limit=5  -> skip the first 5 results, then return the next 5
    // Formula: skip = (page - 1) * limit
    // ----------------------------------------------------------
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    // Optional but good practice: if user asks for a page that doesn't exist, say so
    if (req.query.page) {
      const numProducts = await Products.countDocuments(filterObj);
      if (skip >= numProducts) {
        return res.status(404).json({
          status: 'fail',
          message: 'This page does not exist',
        });
      }
    }

    // ----------------------------------------------------------
    // STEP 6: EXECUTE the fully-built query (only ONE database call happens here)
    // ----------------------------------------------------------
    const products = await query;

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: { products },
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'Product is not found' });
    }
    res.status(200).json({ status: 'success', data: { product } });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({ status: 'success', data: { newProduct } });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updateProduct) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }
    res.status(200).json({ status: 'success', data: { updateProduct } });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Products.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};
