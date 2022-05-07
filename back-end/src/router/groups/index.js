const express = require('express');
const {
  createGroup,
  editGroup,
  deleteGroup,
  findAllGroups,
} = require('../../controllers/groups');

const groupsRoutes = express.Router();

groupsRoutes.get('/', findAllGroups);
groupsRoutes.post('/', createGroup);
groupsRoutes.put('/:id', editGroup);
groupsRoutes.delete('/:id', deleteGroup);

module.exports = groupsRoutes;