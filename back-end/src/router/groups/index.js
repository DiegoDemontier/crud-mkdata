const express = require('express');
const { createGroups, editGroups } = require('../../controllers/groups');

const routerUsers = express.Router();

routerUsers.post('/', createGroups);
routerUsers.put('/', editGroups);

module.exports = routerUsers;