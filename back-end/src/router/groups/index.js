const express = require('express');
const createGroups = require('../../controllers/groups/createGroups');

const routerUsers = express.Router();

routerUsers.post('/', createGroups);

module.exports = routerUsers;