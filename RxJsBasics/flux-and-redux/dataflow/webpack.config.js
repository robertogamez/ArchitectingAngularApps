const path = require('path');

module.exports = {
	entry: "./todo-app.js",
	output: {
		filename: "./bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	watch: true
};