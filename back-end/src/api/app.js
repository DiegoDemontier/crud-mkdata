const express = require('express');
const cors = require('cors');

const errorMiddleware = require('../middleware/errorHandle');
const groupsRoutes = require('../router/groups');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/groups', groupsRoutes);
app.use(errorMiddleware);

module.exports = app;
