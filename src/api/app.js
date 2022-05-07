const express = require('express');
const cors = require('cors');

const errorMiddleware = require('../middleware/errorHandle');
const groupsRoutes = require('../router/groups');
const customersRoutes = require('../router/customers');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/groups', groupsRoutes);
app.use('/customers', customersRoutes);
app.use(errorMiddleware);

module.exports = app;