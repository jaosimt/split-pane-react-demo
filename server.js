const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3001;

const server = new WebpackDevServer({
	compress: false,
	port: port,
	client: {
		overlay: true,
	}
}, webpack(config));

(async () => {
	await server.start();
	console.log(`Dev server is listening on port ${port}`);
})();