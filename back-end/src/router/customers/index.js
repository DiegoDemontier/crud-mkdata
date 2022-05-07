const express = require('express');
const {
  createCustomer,
  getAllCustomer,
} = require('../../controllers/customers');

const customersRoutes = express.Router();

customersRoutes.post('/', createCustomer);
customersRoutes.get('/', getAllCustomer);

module.exports = customersRoutes;