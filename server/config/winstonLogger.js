const winston = require('winston');

const loggerConfig = {
	level: 'info',
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.colorize(),
		winston.format.json(),
		winston.format.prettyPrint()
	),
	defaultMeta: { service: 'user-service' },
	transports: [
		new winston.transports.File({
			filename: './server/logs/error.log',
			level: 'error',
		}),
		new winston.transports.File({ filename: './server/logs/combined.log' }),
		new winston.transports.Console(),
	],
};

module.exports = loggerConfig;
