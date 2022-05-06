const express = require('express');
const {
  createGroup,
  editGroup,
  deleteGroup,
  findAllGroups,
} = require('../../controllers/groups');

const routerUsers = express.Router();

routerUsers.get('/', findAllGroups);
routerUsers.post('/', createGroup);
routerUsers.put('/', editGroup);
routerUsers.delete('/:id', deleteGroup);

module.exports = routerUsers;