const express = require('express');
const {
  createCustomer,
  getAllCustomer,
  editCustomer,
} = require('../../controllers/customers');

const customersRoutes = express.Router();

customersRoutes.post('/', createCustomer);
customersRoutes.get('/', getAllCustomer);
customersRoutes.put('/:id', editCustomer);

module.exports = customersRoutes;