const express = require('express');
const cors = require('cors');

const groupsRoutes = require('../router/groups');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/groups', groupsRoutes);

module.exports = app;
