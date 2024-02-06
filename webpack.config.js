const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'split-pane-react-demo.js'
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.json'
		],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src'),
		],
		aliasFields: ['browser']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			},
		]
	},
	performance: { 
		hints: false 
	},
	plugins: [ 
		new HtmlWebpackPlugin({ template: './src/index.html' }), 
		new MiniCssExtractPlugin()
	]
};