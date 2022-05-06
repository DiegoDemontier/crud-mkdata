const express = require('express');
const {
  createCustomer,
} = require('../../controllers/customers');

const customersRoutes = express.Router();

customersRoutes.post('/', createCustomer);

module.exports = customersRoutes;