const winston = require('winston');

const winstonLoggerConfig = {
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.colorize(),
		winston.format.json(),
		winston.format.prettyPrint()
	),
	defaultMeta: { service: 'user-service' },
	transports: [
		new winston.transports.File({
			filename: './logs/combined.log',
			level: 'info',
		}),
		new winston.transports.File({
			filename: './logs/errors.log',
			level: 'error',
		}),

		// new winston.transports.Console(),
	],
};

module.exports = winstonLoggerConfig;
