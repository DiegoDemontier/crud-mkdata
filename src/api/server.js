const app = require('./app');
require('dotenv').config();

const { API_PORT } = process.env;

app.listen(API_PORT, () => console.log(`App listening on port ${API_PORT}!`));