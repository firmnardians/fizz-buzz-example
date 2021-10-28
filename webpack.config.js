const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		js: glob.sync('./src/**/*.js'),
	},
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: `main.bundle.js`,
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};
