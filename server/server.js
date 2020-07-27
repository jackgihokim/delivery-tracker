const dotenv = require('dotenv');
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const expressConfig = require('./config/express');
const app = expressConfig();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${ port }`));

module.exports = app;
