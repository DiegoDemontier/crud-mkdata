const express = require('express');
const {
  createGroups,
  editGroups,
  deleteGroups,
} = require('../../controllers/groups');

const routerUsers = express.Router();

routerUsers.post('/', createGroups);
routerUsers.put('/', editGroups);
routerUsers.delete('/:id', deleteGroups);

module.exports = routerUsers;