const babelrc = () => {
	return {
		babelrc: false,
		presets: [
			'@babel/preset-env',
			'@babel/preset-react',
		],
		plugins: [
			'@babel/plugin-proposal-class-properties',
		],
	};
};

module.exports = babelrc;

