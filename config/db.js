// config/db.js

	module.exports = {
		// process.env for Heroku environments
		url : 	process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL  ||
				'mongodb://localhost/moritz-dev'
	}
