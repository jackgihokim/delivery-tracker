const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

module.exports = () => {
	app.set('trust proxy', true);
	
	app.use(helmet());
	
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}
	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.use(cors());
	
	const apiV1 = '/api/v1';
	const tracker = require('../app/routes/tracker.route');
	app.use(`${apiV1}/delivery-tracker`, tracker);
	
	app.use(express.static('./public'));
	
	return app;
};
