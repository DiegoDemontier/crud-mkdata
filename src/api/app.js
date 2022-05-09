const express = require('express');
const cors = require('cors');

const errorMiddleware = require('../middleware/errorHandle');
const groupsRoutes = require('../router/groups');
const customersRoutes = require('../router/customers');
// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
  }
  next();
}
const app = express();
app.use(ignoreFavicon);

app.use(express.json());
app.use(cors());

app.use('/groups', groupsRoutes);
app.use('/customers', customersRoutes);
app.use('/', (req, res) => res.send('Api is running'));
app.use(errorMiddleware);

module.exports = app;
