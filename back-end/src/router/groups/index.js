const express = require('express');
const {
  createGroups,
  editGroups,
  deleteGroups,
  findAllGroups,
} = require('../../controllers/groups');

const routerUsers = express.Router();

routerUsers.get('/', findAllGroups);
routerUsers.post('/', createGroups);
routerUsers.put('/', editGroups);
routerUsers.delete('/:id', deleteGroups);

module.exports = routerUsers;