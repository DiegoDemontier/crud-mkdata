const express = require('express');
const {
  createCustomer,
  getAllCustomer,
  editCustomer,
  deleteCustomer,
} = require('../../controllers/customers');

const customersRoutes = express.Router();

customersRoutes.post('/', createCustomer);
customersRoutes.get('/', getAllCustomer);
customersRoutes.put('/:id', editCustomer);
customersRoutes.delete('/:id', deleteCustomer);

module.exports = customersRoutes;