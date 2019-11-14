const webpack = require("webpack");

module.exports = (env) => {
	return {
		target: "node",
		stats: "errors-only",
		devtool: "source-map",
		resolve: {
			extensions: [".ts", ".js"],
			get alias() {
				if (env.ES_VER == 6) {
					return {
						"mobx": __dirname + "../../node_modules/mobx/lib/mobx.es6.js",
					};
				}
			},
		},
		plugins: [
			new webpack.DefinePlugin({
				ES_VER: env.ES_VER,
			}),
		],
	};
};
