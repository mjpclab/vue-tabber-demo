const webpack = require('webpack');
const path = require('path');

module.exports = [{
	entry: './src/js/index.js',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [
		/*new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})*/
	],
	devtool: 'source-map'
}, {
	entry: './src/js/runtime.js',
	output: {
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-runtime.js'
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},
	plugins: [
		/*new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})*/
	],
	devtool: 'source-map'
}];