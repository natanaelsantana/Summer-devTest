const express = require('express');
const { getAll, getById, search } = require('../middleware');

const product = express.Router();

product
  .route('/search')
  .get(search);

product
  .route('/:id')
  .get(getById)

product
  .route('/')
  .get(getAll)

module.exports = { product };