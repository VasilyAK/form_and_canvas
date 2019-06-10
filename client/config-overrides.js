const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
	if (!config.plugins) {
		config.plugins = [];
	}

	config.plugins.push(
		(process.env.NODE_ENV === 'production') ?
			new CopyWebpackPlugin([{context: './src/', from: 'data/*.json'}]) :
			new CopyWebpackPlugin([{context: './src/', from: 'data/*.json', to: './build'}])
	);

	config.plugins.push(
		(process.env.NODE_ENV === 'production') ?
			new CopyWebpackPlugin([{context: './src/', from: 'fonts', to: './fonts'}]) :
			new CopyWebpackPlugin([{context: './src/', from: 'fonts/', to: './build'}])
	);

	return config;
};